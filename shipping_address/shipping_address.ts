/** Defining schema interface */ 
export interface ShippingAddress {
  _id?: { $oid: string };
  codeName: string;
  city: string;
}
