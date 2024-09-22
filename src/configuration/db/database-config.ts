import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../../users/entities/user.entity";
import { Todo } from "../../tasks/entities/task.entity";
import { TodoVersion } from "../../versioning/entity/task-version.entity";


export const DatabaseConfig = async (configService:ConfigService):Promise<TypeOrmModuleOptions>  => ({
  type:"postgres",
  host:configService.getOrThrow<string>("DATASOURCE_HOST"),
  port:configService.getOrThrow<number>("DATASOURCE_PORT"),
  database:configService.getOrThrow<string>("DATASOURCE_DATABASE"),
  username:configService.getOrThrow<string>("DATASOURCE_USERNAME"),
  password:configService.getOrThrow<string>("DATASOURCE_PASSWORD"),
  entities:[User,Todo,TodoVersion],
  synchronize:true, // Dev only
  logging:true,

})
