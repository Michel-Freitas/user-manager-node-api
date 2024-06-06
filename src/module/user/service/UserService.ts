import { IUserRepository } from "../repository/IUserRepository";
import { TCreateUser, TUser } from "../type";
import { IUserService } from "./IUserService";

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async create(data: TCreateUser): Promise<void> {
    await this.userRepository.create(data);
  }

  getAll(): Promise<TUser[]> {
    throw new Error("Method not implemented.");
  }

  getById(id: string): Promise<TUser> {
    throw new Error("Method not implemented.");
  }
}
