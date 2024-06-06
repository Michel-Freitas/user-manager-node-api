import { IUserRepository } from "../repository/IUserRepository";
import { TCreateUser, TUser, TUserDetails } from "../type";
import { IUserService } from "./IUserService";

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async create(data: TCreateUser): Promise<void> {
    await this.userRepository.create(data);
  }

  async getAll(): Promise<TUser[]> {
    return this.userRepository.getAll();
  }

  async getById(id: number): Promise<TUserDetails> {
    const result = await this.userRepository.getById(id);
    if (result === null) {
      throw new Error("Usuário não encontrado.");
    }

    delete result.password;

    return result;
  }
}
