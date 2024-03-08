import { Router } from "express";
import User from "../models/user.model.js";

import {
  login,
  register,
  certificateUser,
} from "../controllers/user.controllers.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/certificate", certificateUser);

//Este endpoint es solo para pruebas, no es necesario en el proyecto final (Agregar los cursos que tiene acceso)
router.put("/add", async (req, res) => {
  try {
    const courseIds = [
      "65eb3961e323539fbef8a0b7",
      "65eb39b8e323539fbef8a0b9",
      "65eb3a68e323539fbef8a0bd",
      "65eb3af6e323539fbef8a0bf",
      "65ea9ca1c9b048d93c2825aa",
    ];
    const users = await User.find();

    for (const user of users) {
      user.idCourses.push(...courseIds);
      await user.save();
    }

    return res
      .status(200)
      .json({ message: "Operación completada para todos los usuarios" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Ha ocurrido un error" });
  }
});

export default router;
