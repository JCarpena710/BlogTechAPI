import express from "express";
import { createComment, readComment, updateComment, deleteComment, showAll } from "./controller";

const commentRouter = express.Router();

commentRouter.route("/createComment").post(createComment);
commentRouter.route("/readComment/:id").get(readComment);
commentRouter.route("/updateComment/:id").put(updateComment);
commentRouter.route("/deleteComment/:id").delete(deleteComment);
commentRouter.route("/list").get(showAll);

export default commentRouter;