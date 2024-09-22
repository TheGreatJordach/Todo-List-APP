import { PartialType } from '@nestjs/swagger';
import { BaseTodoDto } from "./base-todo.dto";

export class UpdateTodoDto extends PartialType(BaseTodoDto) {}
