import { Test, TestingModule } from '@nestjs/testing';
import { ReadUsersService } from './read-users.service';

describe('UsersService', () => {
  let service: ReadUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadUsersService],
    }).compile();

    service = module.get<ReadUsersService>(ReadUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
