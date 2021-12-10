import express from "express";
import { showUser, updateUser, deleteUser, showAll } from "./controller";

const userRouter = express.Router();

// Lo que debo proteger es lo siguiente
//? Para poder proteger mi ruta debo usar all()
userRouter.route("/showUser/:id").get(showUser);
userRouter.route("/updateUser/:id").put(updateUser);
userRouter.route("/deleteUser/:id").delete(deleteUser);
userRouter.route("/users").get(showAll);

//? Usamos export default cuando solamente hay una cosa que exportar
export default userRouter;