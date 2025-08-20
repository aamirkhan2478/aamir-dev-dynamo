import mongoose from "mongoose";

const TechnologySchema = new mongoose.Schema(
  {
    frameworks: [String],
    languages: [String],
    skills: [String],
  },
  { timestamps: true }
);

export default mongoose.models.Technology ||
  mongoose.model("Technology", TechnologySchema);
