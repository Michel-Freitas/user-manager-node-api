import { TCreateAddress, TAddress } from "src/module/address/type";
import { UserModel } from "@prisma/client";

export type TUser = UserModel;

export type TCreateUser = Omit<UserModel, "id" | "status"> & {
  address: TCreateAddress;
};

export type TUserDetails = Omit<TUser, "password"> & {
  address: TAddress;
};
