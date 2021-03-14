import "dotenv/load.ts";
import { app } from "app/mod.ts";
import { validate, auth } from "app/middleware.ts";
import { register, login } from "./user/user_controller.ts"
import { RegisterValidation, LoginValidation } from "./user/user_validator.ts"
import userGroup from "./user/user_route.ts"

console.log(`http://localhost:${Deno.env.get('APP_PORT')}/`);

const up = app.group("/users");
up.use(auth());
userGroup(up);

app
  .post("/register", register, validate(RegisterValidation))
  .post("/login", login, validate(LoginValidation))
  .start({ port: Number(Deno.env.get('APP_PORT')) || 8080 });
