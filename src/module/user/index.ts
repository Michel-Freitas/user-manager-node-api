import { UserRepository } from "./repository/UserRepository";
import { UserController } from "./UserController";
import { UserService } from "./service/UserService";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userController };
