import { Router } from "express";
import { register, getLessons } from "../controllers/lesson.controllers.js";

const router = Router();

router.post("/register", register);
router.get("/:idCourse", getLessons);

export default router;
