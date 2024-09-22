import { IsNonEmptyString } from "../../common/decorators/is-non-empty-string";
import { IsEmail, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Todo } from "../../tasks/entities/task.entity";

export class BaseUserDto{
 @IsNonEmptyString()
  readonly name:string
  @IsEmail()
  @IsNotEmpty()
 readonly email:string

 @ApiProperty({
  description: "Unique Profile name. When provided, user can be found by profileName",
  required: false,
  example: "DTrump"
 })
 @IsOptional()
 @IsNonEmptyString({})
 readonly profileName?:string


 @ApiProperty({
  description: "List of Todo items for the user",
  required: false,
  type:[Todo]
 })
 @IsOptional()
 @Type(() => Todo)
 @ValidateNested({each:true})
 todos?:Todo[];

}
