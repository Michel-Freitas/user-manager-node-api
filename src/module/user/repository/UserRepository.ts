import { UserModel } from "@prisma/client";
import { TCreateUser } from "../type";
import { IUserRepository } from "./IUserRepository";
import { prisma } from "../../../setup";

export class UserRepository implements IUserRepository {
  async create(data: TCreateUser): Promise<void> {
    await prisma.userModel.create({
      data: {
        cpf: data.cpf,
        name: data.name,
        password: data.password,
        dateBirth: data.dateBirth,
        role: data.role,
        AddressModel: {
          create: {
            street: data.address.street,
            number: data.address.number,
            city: data.address.city,
            state: data.address.state,
            neighborhood: data.address.neighborhood,
            zipCode: data.address.zipCode,
          },
        },
      },
    });
  }

  getAll(): Promise<UserModel[]> {
    throw new Error("Method not implemented.");
  }

  getById(id: string): Promise<UserModel | null> {
    throw new Error("Method not implemented.");
  }
}
