import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseConfig } from "../configuration/db-config/database-config";
import { validatedEnvVariables } from "../environements/environmentValidation";

@Module({
  imports:[ConfigModule.forRoot({
    validate:validatedEnvVariables
  }), TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    imports: [ConfigModule],
    useFactory: DatabaseConfig
  })]
})
export class DatabaseModule {}
