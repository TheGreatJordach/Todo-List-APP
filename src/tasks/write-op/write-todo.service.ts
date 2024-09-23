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



  async update(id: number, updateTaskDto: UpdateTodoDto): Promise<Todo> {
    // Executes a SQL COUNT query, returns 0 if nothing is found
    const todoCount: number = await this.todoRepository.count({where: {identifier: id}});

    // If no todo is found, throw NotFoundException
    if(todoCount === 0){
      throw new NotFoundException(`Todo ${id} not found`);
    }

    // Try to preload the updated entity
    const updatedTodo = await this.todoRepository.preload({
      identifier:id,
      ...updateTaskDto,
    });

    // If preload fails, throw NotFoundException
    if(!updatedTodo) {
      throw new NotFoundException(`Todo ${id} not found`);}

    return await this.todoRepository.save(updatedTodo);

  }

  // Save and return the updated todo
  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
