import { NextResponse as res } from "next/server";
import connectDB from "@/utils/mongoose";
import { ObjectId } from "mongodb";
import Skill from "@/models/Skill";

export async function GET(_req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    if (ObjectId.isValid(id)) {
      const objectId = new ObjectId(id);
      const skill = await Skill.findOne({ _id: objectId });
      return res.json({ skill, status: 200 }, { status: 200 });
    } else {
      return res.json({ error: "Skill not found" }, { status: 400 });
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
      await Skill.findOneAndDelete({ _id: objectId });
      return res.json(
        {
          message: "Skill deleted successfully",
          status: 200,
        },
        { status: 200 }
      );
    } else {
      return res.json({ error: "Skill not found" }, { status: 400 });
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
      await Skill.findOneAndUpdate(
        { _id: objectId },
        {
          $set: { name },
          $currentDate: { lastModified: true },
        }
      );
      return res.json(
        {
          message: "Skill Updated successfully",
          status: 200,
        },
        { status: 200 }
      );
    } else {
      return res.json({ error: "Skill not found" }, { status: 400 });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}
