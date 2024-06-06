import { TCreateUser, TUser } from "../type";

export interface IUserService {
  getAll(): Promise<TUser[]>;
  getById(id: string): Promise<TUser>;
  create(data: TCreateUser): Promise<void>;
}
