import { TCreateUser, TUser, TUserDetails } from "../type";

export interface IUserService {
  getAll(): Promise<TUser[]>;
  getById(id: number): Promise<TUserDetails>;
  create(data: TCreateUser): Promise<void>;
}
