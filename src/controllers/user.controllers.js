import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email })
      .populate("idCourses")
      .exec();

    if (!userFound) return res.send({ message: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.send({ message: "Contraseña incorrecta" });

    return res.send(userFound);
  } catch (error) {
    return res.send({ message: "A ocurrido un error" });
  }
};

export const register = async (req, res) => {
  const { name, lastName, email, password, activity, country, city, avatar } =
    req.body;
  try {
    const userFound = await User.findOne({ email: email });

    if (userFound)
      return res.send({ message: "Este correo no esta disponible" });
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      lastName,
      activity,
      country,
      city,
      email,
      avatar,
      password: passwordHash,
    });

    const userCreated = await newUser.save();

    return res.send(userCreated);
  } catch (error) {
    return res.send({ message: "A ocurrido un error" });
  }
};

export const certificateUser = async (req, res) => {
  const { titleCourse, idUser } = req.body;
  try {
    const userFound = await User.findById(idUser).populate("idCourses").exec();
    if (!userFound) return res.send({ message: "Usuario no encontrado" });

    const isCourse = userFound.certifications.some(
      (certification) => certification.titleCourse === titleCourse
    );

    if (isCourse) return res.send(userFound);

    userFound.certifications.push({ titleCourse });
    const userFoundedUpdated = await userFound.save();

    return res.send(userFoundedUpdated);
  } catch (error) {
    return res.send({ message: "A ocurrido un error" });
  }
};
