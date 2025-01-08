import clientPromise from "@/utils/mongodb";
import moment from "moment";
import { NextResponse as res } from "next/server";
import { sendEmail } from "@/utils/mailer";

export async function POST(req) {
  const client = await clientPromise;
  const body = await req.json();
  const { email, name, message } = body;
  if (!name || !email || !message) {
    return res.json({ error: "Please fill all required fields!", status: 400 });
  }

  const collection = client.db("Portfolio").collection("Contacts");

  try {
    await collection.insertOne({
      name,
      email,
      message,
      createdAt: moment().format(),
      lastModified: moment().format(),
    });
    sendEmail({
      subject: "Contact Form",
      emailType: "contact",
      name,
      email,
      message,
      receivedAt: new Date(),
    });
    return res.json({ msg: "Email sent Successfully", status: 201 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function GET(req) {
  const client = await clientPromise;
  const collection = client.db("Portfolio").collection("Contacts");
  try {
    const contacts = await collection.find().toArray();
    return res.json({ contacts, status: 200 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}