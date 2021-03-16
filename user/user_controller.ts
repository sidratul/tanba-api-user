import { Context } from "abc/context.ts";
import { TanbaContext } from "app/context.ts";
import { generateToken , UserPayload } from "jwt/mod.ts";
import * as UserModel from "./user_model.ts";
import { User, Login, Register } from "./user_setting.ts";
import { SuccessRegister } from "./user_messages.ts";


export function login(c: Context) {
  const tc: TanbaContext = c.customContext;
  const body = tc.data as Login;
  const user = UserModel.findByUniqueType(body.username);

  console.log("Yser",user);

  return c.json({
    data: {
      user
    },
    message : SuccessRegister,
  });
}

export async function register(c: Context) {
  const data = {
    username: 'sid',
    password: 'string'
  } as User;

  const id = await UserModel.insertUser(data);
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
  const users = await UserModel.findAll();

  const tc: TanbaContext = c.customContext;

  return {
    message : SuccessRegister,
    data : {
      users,
    }
  } 
}