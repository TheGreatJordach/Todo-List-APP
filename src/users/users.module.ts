import { Module } from '@nestjs/common';
import { ReadUsersService } from './read-op/read-users.service';
import { ReadUsersController } from './read-op/read-users.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [ReadUsersController],
  providers: [ReadUsersService],
})
export class UsersModule {}
