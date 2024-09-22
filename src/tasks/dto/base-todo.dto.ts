import { IsNonEmptyString } from "../../common/decorators/is-non-empty-string";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BaseUserDto } from "../../users/dto/base-user.dto";
import { TaskPriority, TaskStatus } from "../enums/Task-enums";

import { TodoVersionBaseDto } from "../../versioning/dto/todo-version-base.dto";

export class BaseTodoDto{
  @ApiProperty({
    description: "Todo title",
    required: true,
    example: "Buy groceries",
  })
  @ApiProperty({description:"Todo title", required:true})
  @IsNonEmptyString()
  readonly title:string;
  @ApiProperty({
    description: "Description of the task to perform",
    required: true,
    example: "Buy milk, eggs, and bread from the supermarket.",
  })
  @ApiProperty({description:"describe the task to perform", required:true})
  @IsNonEmptyString()
  readonly description:string;

  @ApiProperty({
    description:"Status of the todo item",
    required:false,
    example: TaskStatus.IN_PROGRESS
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  @ApiProperty({description:"status", required:false})
  readonly status?:TaskStatus

  @ApiProperty({
    description: "Due date for the todo item",
    required: false,
    type: Date,
    example: "2023-12-31T23:59:59.000Z",
  })
  @IsOptional()
  @Type(() => Date)
  readonly duDate?:Date

  @ApiProperty({
    description:"Priority level of the todo item",
    required:false,
    enum:TaskPriority,
    example:TaskPriority.LOW
  })
  @IsOptional()
  @IsEnum(TaskPriority)
  readonly priority?:TaskPriority

  @ApiProperty({
    description:"User associated with the todo item",
    type: BaseUserDto,
    required:true,
  })
  @ValidateNested()
  @Type(() => BaseUserDto)
 readonly user:BaseUserDto;

  @ApiProperty({
    description:"List of versions for the todo item",
    type: [TodoVersionBaseDto],
    required:false})
  @IsOptional()
  @ValidateNested({each:true})
  @Type(() => TodoVersionBaseDto )
 readonly versions:TodoVersionBaseDto[]
}
