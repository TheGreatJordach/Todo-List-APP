import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "../entities/task.entity";
import { Repository } from "typeorm";

@Injectable()
export class WriteTodoService {

  constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) {}
  async create(createTaskDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTaskDto);
    try {
      return await this.todoRepository.save(todo);
    } catch (error) {
      throw new InternalServerErrorException(`Error creating todo: ${error}`);
    }

  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTodoDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
