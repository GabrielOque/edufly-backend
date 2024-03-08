import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    idLesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    nameUser: {
      type: String,
      required: true,
      trim: true,
    },
    lastNameUser: {
      type: String,
      required: true,
      trim: true,
    },
    avatarUser: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
