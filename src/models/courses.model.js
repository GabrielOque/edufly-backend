import mongose from "mongoose";

const courseSchema = new mongose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantitylessons: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      required: true,
      trim: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongose.model("Course", courseSchema);
