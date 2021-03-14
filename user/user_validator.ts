import * as yup from "yup"
import { ErrRequiredUser } from "./user_messages.ts"

export const RegisterValidation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

