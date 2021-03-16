import * as z from "zod"
import { ShippingAddress } from '../shipping_address/shipping_address.ts'

export const FindProjection = {
  shippingAddress: 0,
  password: 0
};

export const LoginProjection = {
  shippingAddress: 0,
}

export interface User {
  _id?: { $oid: string };
  email: string;
  username: string;
  password: string;
  shippingAddress : Array<ShippingAddress>;
}

export const LoginValidation = z.object({
  username: z.string(),
  password: z.string().min(6)
});

export type Login = z.infer<typeof LoginValidation>;

export const RegisterValidation = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string(),
});

export type Register = z.infer<typeof RegisterValidation>;
