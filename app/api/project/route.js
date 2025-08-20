import { NextResponse as res } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "@/utils/mongoose";
import moment from "moment";
import Project from "@/models/Project";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      name,
      description,
      pics, // Array of base64 strings
      languages,
      live,
      source,
      isLive,
      isSource,
    } = body;

    // Validate required fields
    if (
      !name?.trim() ||
      !description?.trim() ||
      !Array.isArray(pics) ||
      pics.length === 0 ||
      pics.some((pic) => !pic.trim()) ||
      !languages?.length ||
      !live?.trim() ||
      !source?.trim()
    ) {
      return res.json(
        { error: "Please fill all required fields correctly!", status: 400 },
        { status: 400 }
      );
    }

    // Upload all images to Cloudinary
    const uploadedPics = [];
    for (const base64Pic of pics) {
      const cloudinaryResult = await cloudinary.uploader.upload(base64Pic, {
        folder: "portfolio_projects",
      });
      uploadedPics.push(cloudinaryResult.secure_url);
    }

    // Save project to DB
    await Project.create({
      name,
      description,
      pics: uploadedPics, // store as array
      languages,
      live,
      source,
      isLive: !!isLive,
      isSource: !!isSource,
      createdAt: moment().toISOString(),
      lastModified: moment().toISOString(),
    });

    return res.json(
      { msg: "Project added successfully", status: 201 },
      { status: 201 }
    );
  } catch (err) {
    console.error("Upload or Insert Error:", err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}

export async function GET(_req) {
  await connectDB();

  try {
    // Sort by createdAt field in descending order (-1)
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.json({ projects, status: 200 }, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}
