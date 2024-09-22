import { Test, TestingModule } from '@nestjs/testing';
import { ReadUsersController } from './read-users.controller';
import { ReadUsersService } from './read-users.service';

describe('UsersController', () => {
  let controller: ReadUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadUsersController],
      providers: [ReadUsersService],
    }).compile();

    controller = module.get<ReadUsersController>(ReadUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
