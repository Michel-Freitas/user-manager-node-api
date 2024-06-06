import { UserModel } from "@prisma/client";
import { TCreateUser, TUpdateUser } from "../type";

export interface IUserRepository {
  create(data: TCreateUser): Promise<void>;
  getAll(): Promise<UserModel[]>;
  getById(id: number): Promise<UserModel | null>;
  delete(id: number): Promise<void>;
  update(id: number, data: TUpdateUser): Promise<void>;
}
