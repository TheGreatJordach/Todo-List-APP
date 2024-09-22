import { InternalServerErrorException, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";




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
})
export class AppConfigModule {}
