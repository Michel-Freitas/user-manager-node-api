import { TCreateAddress, TAddress } from "src/module/address/type";
import { UserModel } from "@prisma/client";

export type TUser = UserModel;

export type TCreateUser = Omit<UserModel, "id" | "status"> & {
  address: TCreateAddress;
};

export type TUpdateUser = Pick<UserModel, "id"> &
  Partial<Pick<UserModel, "name" | "dateBirth" | "role" | "status">>;

export type TUserDetails = Omit<TUser, "password"> & {
  address: TAddress;
};
