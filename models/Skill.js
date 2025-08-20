import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

export default mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
