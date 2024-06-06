import { UserModel } from "@prisma/client";
import { TCreateAddress } from "src/module/address/type";

export type TUser = UserModel;

export type TCreateUser = Omit<UserModel, "id" | "status"> & {
  address: TCreateAddress;
};
