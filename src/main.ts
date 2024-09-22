import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { SwaggerModule } from "@nestjs/swagger";
import { swaggerConfig } from "./configuration/swagger/swagger.document";
import { SWAGGER_PATH } from "./configuration/swagger/env.swagger";

/**
 * TypeScript's Awareness:A declaration for a constant named `module` with a type of `any`.
 *
 * By default, TypeScript doesn't recognize Webpack's injected module properties because
 * they are not part of the standard Node.js or TypeScript definitions.
 * Without this declaration, TypeScript would throw errors when you attempt to access module.hot
 * or other HMR-related properties.
 */
declare const module:any

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(
      () => app.close()
    );
  }

  const swaggerDocument = SwaggerModule.createDocument(app,swaggerConfig);
  SwaggerModule.setup(SWAGGER_PATH,app,swaggerDocument)

  const configService = app.get(ConfigService)
  const globalPrefix: string = configService.get<string>("APP_PREFIX")
  const port: number = configService.get<number>("APP_PORT")

  app.setGlobalPrefix(globalPrefix)
  await app.listen(port);
}
bootstrap();
