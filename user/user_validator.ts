import * as yup from "yup"

export const LoginValidation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

