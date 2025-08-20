import { NextResponse } from "next/server";
import connectDB from "@/utils/mongoose";
import Project from "@/models/Project";
import mongoose from "mongoose";

export async function GET(_req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const project = await Project.findById(id);
      if (!project) {
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(project, { status: 200 });
    }
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  } catch (err) {
    console.error(err.message);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(_req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const deletedProject = await Project.findByIdAndDelete(id);
      if (!deletedProject) {
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { message: "Project deleted successfully" },
        { status: 200 }
      );
    }
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  } catch (err) {
    console.error(err.message);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await connectDB();
  const { id } = params;
  const { name, description, pic, languages, live, source, isLive, isSource } =
    await req.json();

  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const updatedProject = await Project.findByIdAndUpdate(
        id,
        {
          name,
          description,
          pic,
          languages,
          live,
          source,
          isLive,
          isSource,
          lastModified: new Date(),
        },
        { new: true }
      );

      if (!updatedProject) {
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { message: "Project updated successfully" },
        { status: 200 }
      );
    }
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  } catch (err) {
    console.error(err.message);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
