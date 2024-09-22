import { IsNonEmptyString } from "../../common/decorators/is-non-empty-string";
import { IsEmail, IsNotEmpty } from "class-validator";

export class BaseUserDto{
 @IsNonEmptyString()
  readonly name:string
  @IsEmail()
  @IsNotEmpty()
 readonly email:string
 @IsNonEmptyString()
 readonly profile:string
}
