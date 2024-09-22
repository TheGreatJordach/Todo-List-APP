import { Module } from '@nestjs/common';
import { WriteTodoService } from './write-op/write-todo.service';
import { WriteTodoController } from './write-op/write-todo.controller';
import { ReadTodoService } from './read-op/read-todo.service';
import { ReadTodoController } from './read-op/read-todo.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./entities/task.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Todo])],
  controllers: [WriteTodoController, ReadTodoController],
  providers: [WriteTodoService, ReadTodoService],
})
export class TasksModule {}
