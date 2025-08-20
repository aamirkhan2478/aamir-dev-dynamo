import { NextResponse as res } from "next/server";
import connectDB from "@/utils/mongoose";
import { ObjectId } from "mongodb";
import Language from "@/models/Language";

export async function GET(_req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      const language = await Language.findOne({ _id: objectId });
      return res.json({ language, status: 200 }, { status: 200 });
    } else {
      return res.json({ error: "Language not found" }, { status: 400 });
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
      await Language.findOneAndDelete({ _id: objectId });
      return res.json(
        {
          message: "Language deleted successfully",
          status: 200,
        },
        { status: 200 }
      );
    } else {
      return res.json({ error: "Language not found" }, { status: 400 });
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
      await Language.findOneAndUpdate(
        { _id: objectId },
        {
          $set: { name },
          $currentDate: { lastModified: true },
        }
      );
      return res.json(
        {
          message: "Language Updated successfully",
          status: 200,
        },
        { status: 200 }
      );
    } else {
      return res.json({ error: "Language not found" }, { status: 400 });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}
