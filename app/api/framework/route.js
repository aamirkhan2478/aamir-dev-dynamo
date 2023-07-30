import { NextResponse as res } from "next/server";
import { connectToDatabase } from "@/utils/mongodb";
import moment from "moment";

export async function POST(req) {
  const client = await connectToDatabase();
  const body = await req.json();
  const { name } = body;
  if (!name) {
    return res.json({ error: "Please fill all required fields!", status: 400 });
  }
  const collection = client.db("Portfolio").collection("Frameworks");

  try {
    await collection.insertOne({
      name,
      createdAt: moment().format(),
      lastModified: moment().format(),
    });
    return res.json({ msg: "New Framework Added Successfully", status: 201 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function GET(_req) {
  const client = await connectToDatabase();
  const collection = client.db("Portfolio").collection("Frameworks");
  try {
    const frameworks = await collection.find().toArray();
    return res.json({ frameworks, status: 200 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}
