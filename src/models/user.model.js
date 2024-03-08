import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },

    activity: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    idCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    certifications: [
      {
        titleCourse: String,
      },
    ],
  },

  { timestamps: true }
);

export default mongoose.model("User", userSchema);
