import express from "express";
import { userController } from "../module/user";

const userRoutes = express.Router();

userRoutes.post("/", userController.create);

export default userRoutes;
