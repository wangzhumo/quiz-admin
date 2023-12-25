import { Inject, Injectable } from '@nestjs/common'
import { QINIU_CONFIG_OPTIONS } from 'common/constants'
import QiniuOptions from './qiniuOptions.interface'
import * as qiniu from 'qiniu'
import { randomUUID } from 'crypto'

@Injectable()
export class QiniuService {
    private readonly DOMAIN = 'https://image.wangzhumo.com'

    // create qiniu client
    constructor(@Inject(QINIU_CONFIG_OPTIONS) private options: QiniuOptions) {
        qiniu.conf.ACCESS_KEY = this.options.ak
        qiniu.conf.SECRET_KEY = this.options.sk
    }

    // upload image token
    token(bucket: string, suffix: string) {
        const saveKey = `${randomUUID()}.${suffix}`
        const policy = new qiniu.rs.PutPolicy({
            scope: bucket,
            expires: 3600,
            saveKey: saveKey,
        })
        return {
            token: policy.uploadToken(),
            key: saveKey,
            domain: this.DOMAIN,
        }
    }

    // default token
    tokenDefault(suffix: string) {
        // get file suffix
        const bucket = 'nestjs-quiz'
        return this.token(bucket, suffix)
    }
}
