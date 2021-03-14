import "dotenv/load.ts";
import { app } from "app/mod.ts";
import { validate } from "app/middleware.ts";
import { Register, AllUser } from "./user/user_controller.ts"
import { RegisterValidation } from "./user/user_validator.ts"

console.log(`http://localhost:${Deno.env.get('APP_PORT')}/`);

app
  .post("/register", Register, validate(RegisterValidation))
  .get("/users", AllUser, )
  .start({ port: Number(Deno.env.get('APP_PORT')) || 8080 });
