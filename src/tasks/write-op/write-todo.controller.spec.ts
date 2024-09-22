import { Test, TestingModule } from '@nestjs/testing';
import { WriteTodoController } from './write-todo.controller';
import { WriteTodoService } from './write-todo.service';

describe('TasksController', () => {
  let controller: WriteTodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WriteTodoController],
      providers: [WriteTodoService],
    }).compile();

    controller = module.get<WriteTodoController>(WriteTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
