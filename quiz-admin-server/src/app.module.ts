import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ImagesController } from './modules/images/images.controller'
import { ImagesModule } from './modules/images/images.module'
import { ConfigModule } from '@nestjs/config'
import Configuration from './configuration'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [Configuration],
        }),
        ImagesModule,
    ],
    controllers: [AppController, ImagesController],
    providers: [AppService],
})
export class AppModule {}
