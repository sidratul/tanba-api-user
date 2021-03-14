import { Context } from "abc/context.ts";
import { TanbaContext } from "context/mod.ts";
import { GenerateToken, JwtPayloadInterface } from "jwt/mod.ts";
import { insertUser, findAll } from "./user_model.ts";
import { UserSchema } from "./user_interface.ts";
import { SuccessRegister } from "./user_messages.ts";

export async function Register(c: Context) {
  const data = {
    username: 'sid',
    password: 'string'
  } as UserSchema;

  const id = await insertUser(data);
  const payload = { } as JwtPayloadInterface;

  payload._id = id;
  payload.username = data.username;

  const token = await GenerateToken(payload);
  
  return {
    message : SuccessRegister,
    data : {
      token,
    }
  } 
}

export async function AllUser(c: Context) {
  const users = await findAll();

  const tc: TanbaContext = c.customContext;

  return {
    message : SuccessRegister,
    data : {
      users,
    }
  } 
}