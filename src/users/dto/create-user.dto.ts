import { BaseUserDto } from "./base-user.dto";
import { IsStrongPassword } from "class-validator";

export class CreateUserDto extends BaseUserDto{
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message: 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character. Example: PassWord@201',
    }
  )
  readonly password: string;
}
