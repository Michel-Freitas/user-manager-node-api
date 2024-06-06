import { UserModel } from "@prisma/client";
import { TCreateUser, TUpdateUser } from "../type";

export interface IUserRepository {
  create(data: TCreateUser): Promise<void>;
  getAll(): Promise<UserModel[]>;
  getById(id: number): Promise<UserModel | null>;
  update(data: TUpdateUser): Promise<void>;
  getByCpf(cpf: string): Promise<UserModel | null>;
}
