import { NextResponse as res } from "next/server";
import { connectToDatabase } from "@/utils/mongodb";
import { ObjectId } from "mongodb";

export async function GET(_req, { params }) {
  const client = await connectToDatabase();
  const collection = client.db("Portfolio").collection("Projects");
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      const project = await collection.findOne({ _id: objectId });
      return res.json({ project, status: 200 });
    } else {
      return res.json({ error: "Project not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  const client = await connectToDatabase();
  const collection = client.db("Portfolio").collection("Projects");
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      await collection.findOneAndDelete({ _id: objectId });
      return res.json({ message: "Project deleted successfully", status: 200 });
    } else {
      return res.json({ error: "Project not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function PUT(req, { params }) {
  const client = await connectToDatabase();
  const body = await req.json();
  const { name, description, pic, languages, live, source } = body;
  const collection = client.db("Portfolio").collection("Projects");
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      await collection.findOneAndUpdate(
        { _id: objectId },
        {
          $set: { name, description, pic, languages, live, source },
          $currentDate: { lastModified: true },
        }
      );
      return res.json({ message: "Project Updated successfully", status: 200 });
    } else {
      return res.json({ error: "Project not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}