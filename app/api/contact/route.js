// import sgMail from "@sendgrid/mail";
// import { NextResponse as res } from "next/server";

// export async function POST(req) {
//   const body = await req.json();
//   const { email, name, message } = body;
//   if (!name || !email || !message) {
//     return res.json({ error: "Please fill all required fields!", status: 400 });
//   }

//   try {
//     sgMail.setApiKey(process.env.SG_API_KEY);
//     const msg = {
//       from: process.env.FROM_EMAIL,
//       to: process.env.TO_EMAIL,
//       subject: name,
//       html: `<h1>Name:</h1><p>${name}</p><h1>Email:</h1><p>${email}</p><h1>Message:</h1><p>${message}</p>`,
//     };
//     await sgMail.send(msg);
//     return res.json({ msg: "Email sent Successfully", status: 201 });
//   } catch (err) {
//     console.log(err.message);
//     return res.json({ error: "Server error", status: 500 });
//   }
// }

import clientPromise from "@/utils/mongodb";
import moment from "moment";
import { NextResponse as res } from "next/server";

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