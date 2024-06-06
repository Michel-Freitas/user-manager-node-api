import { AddressModel } from "@prisma/client";

export type TAddress = AddressModel;

export type TCreateAddress = Omit<AddressModel, "id" | "userId">;
