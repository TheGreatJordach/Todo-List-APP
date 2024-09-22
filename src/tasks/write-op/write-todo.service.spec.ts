import { Test, TestingModule } from '@nestjs/testing';
import { WriteTodoService } from './write-todo.service';

describe('TasksService', () => {
  let service: WriteTodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WriteTodoService],
    }).compile();

    service = module.get<WriteTodoService>(WriteTodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
