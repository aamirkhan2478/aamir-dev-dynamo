import { NextResponse as res } from "next/server";
import clientPromise from "@/utils/mongodb";
import moment from "moment";

export async function POST(req) {
  const client = await clientPromise;
  const body = await req.json();
  const { name, description, pic, languages, live, source } = body;
  if (!name || !description || !pic || !languages || !live || !source) {
    return res.json({ error: "Please fill all required fields!", status: 400 });
  }
  const collection = client.db("Portfolio").collection("Projects");

  try {
    await collection.insertOne({
      name,
      description,
      pic,
      languages,
      live,
      source,
      createdAt: moment().format(),
      lastModified: moment().format(),
    });
    return res.json({ msg: "New Project Added Successfully", status: 201 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function GET(_req) {
  const client = await clientPromise;
  const collection = client.db("Portfolio").collection("Projects");
  try {
    const projects = await collection.find().toArray();
    return res.json({ projects, status: 200 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}
