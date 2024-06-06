import express from "express";
import { userController } from "../module/user";
import { RouterHandler } from "../infra/handler/RouterHandler";

const userRoutes = express.Router();

userRoutes.post("/", RouterHandler.wrap(userController.create));
userRoutes.get("/", RouterHandler.wrap(userController.listAll));
userRoutes.get("/:id", RouterHandler.wrap(userController.findById));
userRoutes.delete("/:id", RouterHandler.wrap(userController.delete));
userRoutes.put("/:id", RouterHandler.wrap(userController.update));

export default userRoutes;
