import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const DatabaseConfig = async (configService:ConfigService):Promise<TypeOrmModuleOptions>  => ({
  type:"postgres",
  host:configService.getOrThrow<string>("DATASOURCE_HOST"),
  port:configService.getOrThrow<number>("DATASOURCE_PORT"),
  database:configService.getOrThrow<string>("DATASOURCE_DATABASE"),
  username:configService.getOrThrow<string>("DATASOURCE_USERNAME"),
  password:configService.getOrThrow<string>("DATASOURCE_PASSWORD"),
  synchronize:true, // Dev only
  logging:true,

})
