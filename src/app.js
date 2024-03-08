import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

import userRoutes from "./routes/user.routes.js";
import courseRoutes from "./routes/course.routes.js";
import lessonRoutes from "./routes/lesson.routes.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/lesson", lessonRoutes);
app.use("/api/comment", commentRoutes);

export default app;
