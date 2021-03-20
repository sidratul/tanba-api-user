import { Context } from "abc/context.ts";
import { TanbaContext } from "app/context.ts";
import * as jwt from "jwt/mod.ts";
import * as msg from "./user_messages.ts";
import * as bcrypt from "hash";
import { LoginError } from "../custom/exception.ts"
import { User, Login, Register } from "./user_setting.ts";
import * as UserModel from "./user_model.ts";

export async function login(c: Context) {
  const tc: TanbaContext = c.customContext;
  const body = tc.data as Login;
  const user = await UserModel.findByUniqueType(body.username) as User;
  
  const loginError = new LoginError(msg.ErrLogin);

  if(!user?._id) throw loginError;
  const isPasswordMatch = await bcrypt.compare(body.password, user.password);
  if(!isPasswordMatch) throw loginError;

  const token = await jwt.generateToken(user as unknown as jwt.UserPayload);

  return c.json({
    data: {
      token
    },
    message : msg.LoginSuccess,
  });
}

export async function register(c: Context) {
  const tc: TanbaContext = c.customContext;
  const body = tc.data as Register;
  body.password = await bcrypt.hash(body.password);

  const id = await UserModel.insertUser(body as unknown as User);
  const token = await jwt.generateToken(body as unknown as jwt.UserPayload);
  
  return {
    message : msg.SuccessRegister,
    data : {
      token,
    }
  } 
}

export async function users(c: Context) {
  const users = await UserModel.findAll();

  const tc: TanbaContext = c.customContext;

  return {
    message : msg.SuccessRegister,
    data : {
      users,
    }
  } 
}