import * as yup from "yup"
import { ErrRequiredUser } from "./user_messages.ts"

export const LoginValidation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const RegisterValidation = yup.object({
  email: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});
