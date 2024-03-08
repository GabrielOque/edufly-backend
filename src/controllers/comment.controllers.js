import Comment from "../models/comment.model.js";

export const createComment = async (req, res) => {
  const { idUser, idLesson, comment, nameUser, lastNameUser, avatarUser } =
    req.body;
  try {
    const newComment = new Comment({
      idUser,
      idLesson,
      comment,
      nameUser,
      lastNameUser,
      avatarUser,
    });

    const commentCreated = await newComment.save();

    return res.send(commentCreated);
  } catch (error) {
    return res.send({ message: "A ocurrido un error" });
  }
};

export const getComments = async (req, res) => {
  const { idLesson } = req.params;
  try {
    const comments = await Comment.find({ idLesson });
    return res.send(comments);
  } catch (error) {
    return res.send({ message: "A ocurrido un error" });
  }
};
