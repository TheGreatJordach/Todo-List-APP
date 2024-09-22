import { Injectable } from '@nestjs/common';

@Injectable()
export class ReadTodoService {


  getAllTasks(){
    return "This service return all the task"
  }
}
