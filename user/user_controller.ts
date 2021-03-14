import { Context } from "abc/context.ts";
import { TanbaContext } from "app/context.ts";
import { generateToken , UserPayload } from "jwt/mod.ts";
import { insertUser, findAll } from "./user_model.ts";
import { UserSchema } from "./user_interface.ts";
import { SuccessRegister } from "./user_messages.ts";


export function login(c: Context) {
  return c.json({
    data: "dsdsd",
    message : SuccessRegister,
  },204);
}

export async function register(c: Context) {
  const data = {
    username: 'sid',
    password: 'string'
  } as UserSchema;

  const id = await insertUser(data);
  const payload = { } as UserPayload;

  payload._id = id;
  payload.username = data.username;

  const token = await generateToken(payload);
  
  return {
    message : SuccessRegister,
    data : {
      token,
    }
  } 
}

export async function users(c: Context) {
  const users = await findAll();

  const tc: TanbaContext = c.customContext;

  return {
    message : SuccessRegister,
    data : {
      users,
    }
  } 
}