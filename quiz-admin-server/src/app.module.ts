import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ImagesController } from './modules/images/images.controller'
import { ImagesModule } from './modules/images/images.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import Configuration from './configuration'
import { QiniuModule } from 'modules/qiniu/qiniu.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [Configuration],
        }),
        QiniuModule.registerAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    sk: configService.get<string>('qiniu.sk'),
                    ak: configService.get<string>('qiniu.ak'),
                }
            },
        }),
        ImagesModule,
    ],
    controllers: [AppController, ImagesController],
    providers: [AppService],
})
export class AppModule {}
