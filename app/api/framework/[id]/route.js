import { NextResponse as res } from "next/server";
import connectDB from "@/utils/mongoose";
import { ObjectId } from "mongodb";
import Framework from "@/models/Framework";

export async function GET(_req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      const framework = await Framework.findOne({ _id: objectId });
      return res.json({ framework, status: 200 }, { status: 200 });
    } else {
      return res.json({ error: "Framework not found" }, { status: 400 });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      await Framework.findOneAndDelete({ _id: objectId });
      return res.json(
        {
          message: "Framework deleted successfully",
          status: 200,
        },
        { status: 200 }
      );
    } else {
      return res.json({ error: "Framework not found" }, { status: 400 });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await connectDB();
  const body = await req.json();
  const { name } = body;
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      await Framework.findOneAndUpdate(
        { _id: objectId },
        {
          $set: { name },
          $currentDate: { lastModified: true },
        }
      );
      return res.json(
        {
          message: "Framework Updated successfully",
          status: 200,
        },
        { status: 200 }
      );
    } else {
      return res.json({ error: "Framework not found" }, { status: 400 });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 400 });
  }
}
