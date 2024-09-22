import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WriteTodoService } from './write-todo.service';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Todo - write operation")
@Controller('write/todo')
export class WriteTodoController {
  constructor(private readonly writeTodoService: WriteTodoService) {}



 @Post()
 @ApiBody({})
 @ApiResponse({})
 @ApiOperation({})
 create(@Body() createTodoDto: CreateTodoDto) {
    return this.writeTodoService.create(createTodoDto);
 }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTodoDto) {
    return this.writeTodoService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writeTodoService.remove(+id);
  }
}
