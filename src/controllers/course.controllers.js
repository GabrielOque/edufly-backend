import Course from "../models/courses.model.js";

export const register = async (req, res) => {
  const { name, quantitylessons, summary, teacher, image } = req.body;
  try {
    const newCourse = new Course({
      name,
      quantitylessons,
      summary,
      teacher,
      image,
    });

    const courseCreated = await newCourse.save();

    return res.send(courseCreated);
  } catch (error) {
    return res.send({ message: "A ocurrido un error" });
  }
};
