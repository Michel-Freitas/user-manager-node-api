import { Request, Response } from "express";
import { IUserService } from "./service/IUserService";
import { TCreateUser } from "./type";

export class UserController {
  constructor(private readonly userService: IUserService) {
    this.create = this.create.bind(this);
  }

  async create(req: Request<any, any, TCreateUser>, res: Response) {
    const { body } = req;
    this.userService.create(body);
    return res.status(201).json();
  }
}
