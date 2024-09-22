import { Test, TestingModule } from '@nestjs/testing';
import { ReadTodoService } from './read-todo.service';

describe('ReadTasksService', () => {
  let service: ReadTodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadTodoService],
    }).compile();

    service = module.get<ReadTodoService>(ReadTodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
