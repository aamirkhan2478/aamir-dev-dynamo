import { NextResponse as res } from "next/server";
import clientPromise from "@/utils/mongodb";
import moment from "moment";

export async function POST(req) {
  const client = await clientPromise;
  const body = await req.json();
  const { name } = body;
  if (!name) {
    return res.json({ error: "Please fill all required fields!", status: 400 });
  }
  const collection = client.db("Portfolio").collection("Skills");

  try {
    await collection.insertOne({
      name,
      createdAt: moment().format(),
      lastModified: moment().format(),
    });
    return res.json({ msg: "New Skill Added Successfully", status: 201 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function GET(_req) {
  const client = await clientPromise;
  const collection = client.db("Portfolio").collection("Skills");
  try {
    const skills = await collection.find().toArray();
    return res.json({ skills, status: 200 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}
