import { Request, Response } from "express";
import { IUserService } from "./service/IUserService";
import { TCreateUser } from "./type";

export class UserController {
  constructor(private readonly userService: IUserService) {
    this.bindMethods();
  }

  private bindMethods() {
    this.create = this.create.bind(this);
    this.listAll = this.listAll.bind(this);
    this.findById = this.findById.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }

  async create(req: Request<any, any, TCreateUser>, res: Response) {
    const { body } = req;
    await this.userService.create(body);
    return res.status(201).json();
  }

  async listAll(req: Request, res: Response) {
    return res.status(200).json(await this.userService.getAll());
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    return res.status(200).json(await this.userService.getById(+id));
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.userService.delete(+id);
    return res.status(204).json();
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    await this.userService.update(+id, body);
    return res.status(200).json();
  }
}
