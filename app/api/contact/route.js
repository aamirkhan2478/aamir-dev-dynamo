import connectDB from "@/utils/mongoose";
import moment from "moment";
import { NextResponse as res } from "next/server";
import { sendEmail } from "@/utils/mailer";
import Contact from "@/models/Contact";

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { email, name, message } = body;
  if (!name || !email || !message) {
    return res.json(
      { error: "Please fill all required fields!", status: 400 },
      { status: 400 }
    );
  }

  try {
    await Contact.insertOne({
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
    return res.json(
      { msg: "Email sent Successfully", status: 201 },
      { status: 201 }
    );
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}

export async function GET(_req) {
  await connectDB();
  try {
    const contacts = await Contact.find();
    return res.json({ contacts, status: 200 }, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}
