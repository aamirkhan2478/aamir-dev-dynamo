import { NextResponse as res } from "next/server";
import connectDB from "@/utils/mongoose";
import moment from "moment";
import Language from "@/models/Language";

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { name } = body;
  if (!name) {
    return res.json(
      { error: "Please fill all required fields!", status: 400 },
      { status: 400 }
    );
  }

  try {
    await Language.insertOne({
      name,
      createdAt: moment().format(),
      lastModified: moment().format(),
    });
    return res.json(
      { msg: "New Language Added Successfully", status: 201 },
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
    const languages = await Language.find();
    return res.json({ languages, status: 200 }, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}
