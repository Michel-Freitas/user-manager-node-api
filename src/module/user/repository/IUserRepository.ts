import { UserModel } from "@prisma/client";
import { TCreateUser } from "../type";

export interface IUserRepository {
  create(data: TCreateUser): Promise<void>;
  getAll(): Promise<UserModel[]>;
  getById(id: string): Promise<UserModel | null>;
}