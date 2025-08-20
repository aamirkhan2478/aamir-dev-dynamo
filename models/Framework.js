import mongoose from "mongoose";

const FrameworkSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

export default mongoose.models.Framework ||
  mongoose.model("Framework", FrameworkSchema);
