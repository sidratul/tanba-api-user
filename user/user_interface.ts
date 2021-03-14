import { ShippingSchema } from '../shipping_address/shipping_address.ts'

export interface UserSchema {
  _id?: { $oid: string };
  email: string;
  username: string;
  password: string;
  shippingAddress : Array<ShippingSchema>;
}