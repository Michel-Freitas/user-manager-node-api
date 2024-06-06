import { BaseError } from "../../../shared/dto/BaseError";
import { IUserRepository } from "../repository/IUserRepository";
import { TCreateUser, TUpdateUser, TUser, TUserDetails } from "../type";
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
      throw new BaseError("Usuário não encontrado.", 404);
    }

    delete result.password;

    return result;
  }

  async delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async update(id: number, data: TUpdateUser): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
