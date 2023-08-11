import { NextResponse as res } from "next/server";
import clientPromise from "@/utils/mongodb";
import { ObjectId } from "mongodb";

export async function GET(_req, { params }) {
  const client = await clientPromise;
  const collection = client.db("Portfolio").collection("Technologies");
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      const technologies = await collection.findOne({ _id: objectId });
      return res.json({ technologies, status: 200 });
    } else {
      return res.json({ error: "Technologies not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  const client = await clientPromise;
  const collection = client.db("Portfolio").collection("Technologies");
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      await collection.findOneAndDelete({ _id: objectId });
      return res.json({
        message: "Technologies deleted successfully",
        status: 200,
      });
    } else {
      return res.json({ error: "Technologies not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}

export async function PUT(req, { params }) {
  const client = await clientPromise;
  const body = await req.json();
  const { frameworks, languages, skill } = body;
  const collection = client.db("Portfolio").collection("Technologies");
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      await collection.findOneAndUpdate(
        { _id: objectId },
        {
          $set: { frameworks, languages, skill },
          $currentDate: { lastModified: true },
        }
      );
      return res.json({
        message: "Technologies Updated successfully",
        status: 200,
      });
    } else {
      return res.json({ error: "Technologies not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 });
  }
}
