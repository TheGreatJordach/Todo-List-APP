import { Controller, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from "@nestjs/common";
import { WriteTodoService } from './write-todo.service';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IdDto } from "../../common/dtos/id-dto";
import { Todo } from "../entities/task.entity";

@ApiTags("Todo - write operation")
@Controller('write/todos')
export class WriteTodoController {
  constructor(private readonly writeTodoService: WriteTodoService) {}



  /**
   * @summary Create a new todo item
   * @description This endpoint allows the creation of a new todo item.
   *
   * @param {CreateTodoDto} createTodoDto - The data needed to create a new todo.
   *
   * @returns {Todo} The newly created todo item.
   *
   * @throws {HttpException} If invalid data is provided, an HTTP 400 Bad Request error is thrown.
   *
   * @decorator
   * @Post()
   * @HttpCode(HttpStatus.CREATED)
   * @ApiOperation({ summary: "Create new todo", description: "Create new todo item" })
   * @ApiBody({ description: "The data needed to create a new todo", type: CreateTodoDto })
   * @ApiResponse({ status: HttpStatus.CREATED, description: 'The todo has been successfully created', type: Todo })
   * @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid data provided' })
   */
 @Post()

 @HttpCode(HttpStatus.CREATED)
 @ApiOperation({
   summary: "Create new todo",
   description: "Create new todo item",
 })
 @ApiBody({
   description: "The data needed to create a new todo",
   type: CreateTodoDto,
 })
 @ApiResponse({
   status: HttpStatus.CREATED,
   description: 'The todo has ben successfully created',
   type:Todo
 })
 @ApiResponse({
   status: HttpStatus.BAD_REQUEST,
   description: 'invalid data provided',

 })
  async create(@Body() createTodoDto: CreateTodoDto):Promise<Todo> {
    return await this.writeTodoService.create(createTodoDto);
 }

  @Patch(':id')
  update(@Param() { id }: IdDto, @Body() updateTaskDto: UpdateTodoDto) {
    return this.writeTodoService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writeTodoService.remove(+id);
  }
}
