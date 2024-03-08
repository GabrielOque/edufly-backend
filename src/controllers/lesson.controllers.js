import Lesson from "../models/lessons.model.js";

export const register = async (req, res) => {
  const { time, title, description, idCourse, url } = req.body;
  try {
    const newLesson = new Lesson({
      time,
      title,
      description,
      idCourse,
      url,
    });

    const lessonCreated = await newLesson.save();

    return res.send(lessonCreated);
  } catch (error) {
    return res.send({ message: "A ocurrido un error" });
  }
};

export const getLessons = async (req, res) => {
  const { idCourse } = req.params;
  try {
    const lessons = await Lesson.find({ idCourse });
    return res.send(lessons);
  } catch (error) {
    return res.send({ message: "A ocurrido un error" });
  }
};
