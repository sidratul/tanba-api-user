import "dotenv/load.ts";
import { Application } from "abc/mod.ts";
import { Register, AllUser } from "./user/user_controller.ts"
import { TanbaContext } from "../tanba-modules/context/mod.ts"
import { validate } from "../tanba-modules/validation/mod.ts"
import { LoginValidation } from "./user/user_validator.ts"

const app = new Application();
console.log(`http://localhost:${Deno.env.get('APP_PORT')}/`);

app.pre((next) =>
  (c) => {
    const tc = new TanbaContext(c);
    return next(tc);
  }
);

app
  .get(
    "/register", 
    Register, 
    (next)=>(c)=> validate(next,c,LoginValidation)
  )
  .get("/users", AllUser)
  .start({ port: Number(Deno.env.get('APP_PORT')) || 8080 });
