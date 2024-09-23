import {
 InternalServerErrorException,
  Module,
  ValidationPipe,
} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import { APP_PIPE } from "@nestjs/core";
import { validationPipeOptions } from "./error-formater-pipe";




@Module({
  imports:[ConfigModule.forRoot({isGlobal: true, cache:true, envFilePath:".env"}),
  CacheModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async () => {

      const ttl: number = parseInt(process.env.APP_CACHE_TTL)
      const max: number = parseInt(process.env.APP_CACHE_MAX)

      if(isNaN(ttl) || ttl <= 0) {
        throw new InternalServerErrorException("Missing Cache TTL")
      }
      if(isNaN(ttl) || ttl <= 0) {
        throw new InternalServerErrorException("Missing Cache MAX")
      }

      console.log(`✨✨✨--> Cache TTL and Cache MAX loaded | { Max:${max} Ttl:${ttl}ms ` )

      return {
        isGlobal: true,
        isGlobalData: true,
        ttl,
        max,
      }
    }
  })
  ],
  providers: [{
    provide: APP_PIPE,
    useValue: new ValidationPipe(validationPipeOptions)
  }]
})
export class AppConfigModule {}
