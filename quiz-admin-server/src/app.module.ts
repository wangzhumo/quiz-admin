import { Module } from '@nestjs/common'
import { ImagesModule } from './modules/images/images.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import Configuration from './configuration'
import { QiniuModule } from 'modules/qiniu/qiniu.module'
import { WinstonModule } from 'nest-winston'
import * as winston from 'winston'
import 'winston-daily-rotate-file'

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
        WinstonModule.forRoot({
            transports: [
                new winston.transports.DailyRotateFile({
                    dirname: `logs`, // log dir
                    filename: '%DATE%.log', // log file name
                    datePattern: 'YYYY-MM-DD', // looper duration
                    zippedArchive: true, // zip
                    maxSize: '20m', // max size
                    maxFiles: '14d', // save max day
                    format: winston.format.combine(
                        winston.format.timestamp({
                            format: 'YYYY-MM-DD HH:mm:ss',
                        }),
                        winston.format.json(),
                    ),
                }),
            ],
        }),
        ImagesModule,
    ],
})
export class AppModule {}
