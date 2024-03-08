import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    idCourse: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    time: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lesson", lessonSchema);
