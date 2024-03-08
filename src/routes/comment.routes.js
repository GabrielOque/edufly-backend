import { Router } from "express";

import {
  createComment,
  getComments,
} from "../controllers/comment.controllers.js";

const router = Router();

router.post("/create", createComment);
router.get("/:idLesson", getComments);

export default router;
