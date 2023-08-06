import { NextResponse as res } from "next/server";
import clientPromise from "@/utils/mongodb";
import { ObjectId } from "mongodb";

export async function GET(_req, { params }) {
  const client = await clientPromise;
  const collection = client.db("Portfolio").collection("Languages");
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      const language = await collection.findOne({ _id: objectId });
      return res.json({ language, status: 200 });
    } else {
      return res.json({ error: "Language not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  const client = await clientPromise;
  const collection = client.db("Portfolio").collection("Languages");
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      await collection.findOneAndDelete({ _id: objectId });
      return res.json({
        message: "Language deleted successfully",
        status: 200,
      });
    } else {
      return res.json({ error: "Language not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function PUT(req, { params }) {
  const client = await clientPromise;
  const body = await req.json();
  const { name } = body;
  const collection = client.db("Portfolio").collection("Languages");
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      await collection.findOneAndUpdate(
        { _id: objectId },
        {
          $set: { name },
          $currentDate: { lastModified: true },
        }
      );
      return res.json({
        message: "Language Updated successfully",
        status: 200,
      });
    } else {
      return res.json({ error: "Language not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}
