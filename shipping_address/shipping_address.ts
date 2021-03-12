/** Defining schema interface */ 
export interface ShippingSchema {
  _id?: { $oid: string };
  codeName: string;
  city: string;
}
