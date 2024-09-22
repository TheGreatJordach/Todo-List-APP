import { Module } from "@nestjs/common";
import { AppConfigModule } from './configuration/app/app.config.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

import { VersioningModule } from './versioning/versioning.module';


@Module({
  imports: [AppConfigModule, DatabaseModule, UsersModule, TasksModule, VersioningModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
