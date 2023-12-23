import { Module } from '@nestjs/common'
import { ImagesController } from './images.controller'
import { QiniuModule } from 'modules/qiniu/qiniu.module'
import { ConfigService } from '@nestjs/config'

@Module({
    imports: [
        QiniuModule.registerAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    sk: configService.get<string>('qiniu.sk'),
                    ak: configService.get<string>('qiniu.ak'),
                }
            },
        }),
    ],
    controllers: [ImagesController],
})
export class ImagesModule {}
