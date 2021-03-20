import { ExceptionHandler, AppError } from 'app/exception.ts'
import { UnauthorizedException  } from "abc/mod.ts";

export class LoginError extends AppError{
  constructor(message: string) {
    super("LoginError",message);
  }
}

ExceptionHandler['LoginError'] = UnauthorizedException;