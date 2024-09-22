import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoVersion } from "./entity/task-version.entity";

@Module({
  imports:[TypeOrmModule.forFeature([TodoVersion])],
})
export class VersioningModule {}
