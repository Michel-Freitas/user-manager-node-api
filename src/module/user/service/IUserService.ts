import { TCreateUser, TUpdateUser, TUser, TUserDetails } from "../type";

export interface IUserService {
  getAll(): Promise<TUser[]>;
  getById(id: number): Promise<TUserDetails>;
  create(data: TCreateUser): Promise<void>;
  delete(id: number): Promise<void>;
  update(id: number, data: TUpdateUser): Promise<void>;
}
