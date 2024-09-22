import { Test, TestingModule } from '@nestjs/testing';
import { ReadTodoController } from './read-todo.controller';

describe('ReadTasksController', () => {
  let controller: ReadTodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadTodoController],
    }).compile();

    controller = module.get<ReadTodoController>(ReadTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
