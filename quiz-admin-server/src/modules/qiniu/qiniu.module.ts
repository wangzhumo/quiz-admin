import { DynamicModule, Module } from '@nestjs/common'
import { QiniuService } from './qiniu.service'
import QiniuOptions from './qiniuOptions.interface'
import { QINIU_CONFIG_OPTIONS } from 'common/constants'
import QiniuAsyncOptions from './qiniuOptions.type'

@Module({})
export class QiniuModule {
    static register(options: QiniuOptions): DynamicModule {
        return {
            module: QiniuModule,
            providers: [
                {
                    provide: QINIU_CONFIG_OPTIONS,
                    useValue: options,
                },
                QiniuService,
            ],
            exports: [QiniuService],
        }
    }

    static registerAsync(options: QiniuAsyncOptions): DynamicModule {
        return {
            module: QiniuModule,
            providers: [
                {
                    provide: QINIU_CONFIG_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                QiniuService,
            ],
            exports: [QiniuService],
        }
    }
}
