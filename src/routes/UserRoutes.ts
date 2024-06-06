import express from "express";
import { userController } from "../module/user";

const userRoutes = express.Router();

userRoutes.post("/", userController.create);
userRoutes.get("/", userController.listAll);
userRoutes.get("/:id", userController.findById);

export default userRoutes;
