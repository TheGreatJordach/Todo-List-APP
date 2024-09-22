import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";
import { InternalServerErrorException } from "@nestjs/common";
import { IsNonEmptyString } from "../common/decorators/is-non-empty-string";
import { isNonEmptyPositiveNumber } from "../common/decorators/is-non-empty-positive.int";


export class EnvironmentValidation {

 // ! **** database env **********/
  @IsNonEmptyString()
  DATASOURCE_USERNAME:string
  @IsNonEmptyString()
  DATASOURCE_PASSWORD:string
  @IsNonEmptyString()
  DATASOURCE_DATABASE:string
  @IsNonEmptyString()
  DATASOURCE_HOST:string
  @isNonEmptyPositiveNumber()
  DATASOURCE_PORT:number

  //? **** Swagger env **********/
  @IsNonEmptyString()
  SWAGGER_VERSION:string
  @IsNonEmptyString()
  SWAGGER_LICENCE:string
  @IsNonEmptyString()
  SWAGGER_LICENCE_URL:string
  @IsNonEmptyString()
  SWAGGER_DESCRIPTION:string
  @IsNonEmptyString()
  SWAGGER_TITLE:string


  //* **** App env **********/
  @isNonEmptyPositiveNumber()
  APP_CACHE_TTL:number
  @isNonEmptyPositiveNumber()
  APP_CACHE_MAX:number
  @isNonEmptyPositiveNumber()
  APP_PORT:number


}

export function validatedEnvVariables(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentValidation, config, {
    enableImplicitConversion:true
  });

  const errors = validateSync(validatedConfig,{
    skipMissingProperties:false
  })

  if(errors.length >0) {
    throw new InternalServerErrorException(`‼️ ${ errors.length } variables failed  environment validation steps. read the log: ${errors.toString()}`)
  }

  console.log(
    "********************************************************************\n" +
    "All the environment variables have successfully been validated! ✅" +"\n" +
    "********************************************************************"

  );

  return validatedConfig;
}
