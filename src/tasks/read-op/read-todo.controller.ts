import { Controller, Get, Param, Query } from "@nestjs/common";
import { ReadTodoService } from "./read-todo.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Todo } from "../entities/task.entity";
import { IdDto } from "../../common/dtos/id-dto";

@ApiTags("Todo - read operation")
@Controller('read/todos/')
export class ReadTodoController {

  constructor(private readonly readTaskService: ReadTodoService) {}

  @Get()
  @ApiResponse({})
  @ApiOperation({
    summary: "Get all todos",
    description: "Fetches a list of all Todo items from the database or return an Empty List if not found.",
  })
  @ApiResponse({ status: 200, description: 'The Todo List has been successfully retrieved.', type: [Todo] })
  @ApiResponse({ status: 404, description: 'Todo item not found.' })
  allTodos(@Query() query: any) {
   const {limit, offset} = query
   console.log(`Limit!${limit} | offset: ${offset}`);
    return this.readTaskService.getAllTasks()
  }

  @Get(":id")
  @ApiResponse({ status: 200, description: 'The Todo item has been successfully retrieved.', type: Todo })
  @ApiResponse({ status: 404, description: 'Todo item not found.' })
  @ApiOperation({
    summary: " Return the Todo items with the provided id.",
    description: "Fetches the item from the database or return null if not found."
  })
  todoById(@Param() { id }: IdDto) {
    return "This handler returns task with id " + id;
  }
}
