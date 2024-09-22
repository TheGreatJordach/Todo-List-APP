import { Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from "../tasks/entities/task.entity";
import { TodoVersion } from "./entity/task-version.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class VersioningService {

  constructor(@InjectRepository(TodoVersion) private readonly VersioningTodoRepository: Repository<TodoVersion>,
              @InjectRepository(Todo) private readonly TodoRepository: Repository<Todo>,) {
  }

 //! Managing Versions
 //? When you update a task, you can create a new version entry:
// TODO: need to implement final version
  async updateTask(id: number, updateData: Partial<Todo>): Promise<Todo> {
    const todo = await this.TodoRepository.findOneBy({identifier:id})
    if (!todo) {
      throw new NotFoundException('Task not found');
    }

    // Create a new version
    const newVersion = new TodoVersion();
    newVersion.version = (todo.versions.length ? Math.max(...todo.versions.map(v => v.version)) : 0) + 1;


    newVersion.data = updateData;
    newVersion.todo = todo;

    await this.VersioningTodoRepository.save(newVersion);

    // Update the todo itself
    Object.assign(todo, updateData);
    return this.TodoRepository.save(todo);
  }

}
