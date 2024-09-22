import { DocumentBuilder } from "@nestjs/swagger";
import {
  SWAGGER_DESCRIPTION,
  SWAGGER_LICENCE,
  SWAGGER_LICENCE_URL,
  SWAGGER_SERVER,
  SWAGGER_TITLE,
  SWAGGER_VERSION,
} from "./env.swagger";



export const swaggerConfig = new DocumentBuilder()
  .setTitle(SWAGGER_TITLE)
  .setDescription(SWAGGER_DESCRIPTION)
  .addServer(SWAGGER_SERVER)
  .setLicense(SWAGGER_LICENCE, SWAGGER_LICENCE_URL)
  .setVersion(SWAGGER_VERSION)
  .build()
