import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  pics: [String],
  languages: [String],
  live: String,
  source: String,
  isLive: Boolean,
  isSource: Boolean,
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
