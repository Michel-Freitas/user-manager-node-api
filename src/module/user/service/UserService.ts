import { EUserStatus } from "@prisma/client";
import { BaseError } from "../../../shared/dto/BaseError";
import { IUserRepository } from "../repository/IUserRepository";
import { TCreateUser, TUpdateUser, TUser, TUserDetails } from "../type";
import { IUserService } from "./IUserService";

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async create(data: TCreateUser): Promise<void> {
    const user = await this.userRepository.getByCpf(data.cpf);
    if (user !== null) {
      throw new BaseError("CPF já cadastrado.", 400);
    }
    await this.userRepository.create(data);
  }

  async getAll(): Promise<TUser[]> {
    return this.userRepository.getAll();
  }

  async getById(id: number): Promise<TUserDetails> {
    const result = await this.userRepository.getById(id);
    if (result === null) {
      throw new BaseError("Usuário com Id não encontrado.", 404);
    }

    delete result.password;

    return result;
  }

  async getByCpf(cpf: string): Promise<TUserDetails> {
    const result = await this.userRepository.getByCpf(cpf);
    if (result === null) {
      throw new BaseError("Usuário com CPF não encontrado.", 404);
    }

    delete result.password;

    return result;
  }

  async delete(id: number): Promise<void> {
    await this.update(id, { id, status: EUserStatus.REMOVED });
  }

  async update(id: number, data: TUpdateUser): Promise<void> {
    if (id !== data.id) {
      throw new BaseError("Id do usuário não confere.", 400);
    }

    await this.getById(id);
    await this.userRepository.update(data);
  }
}
