import { Inject, Injectable } from '@nestjs/common'
import { QINIU_CONFIG_OPTIONS } from 'common/constants'
import QiniuOptions from './qiniuOptions.interface'
import * as qiniu from 'qiniu'
import { randomUUID } from 'crypto'
import path from 'path'

@Injectable()
export class QiniuService {
    // create qiniu client
    constructor(@Inject(QINIU_CONFIG_OPTIONS) private options: QiniuOptions) {
        qiniu.conf.ACCESS_KEY = this.options.ak
        qiniu.conf.SECRET_KEY = this.options.sk
    }

    // upload image token
    token(bucket: string, suffix: string): string {
        const policy = new qiniu.rs.PutPolicy({
            scope: bucket,
            saveKey: `${randomUUID()}.${suffix}`,
        })
        return policy.uploadToken()
    }

    // default token
    tokenDefault(fileName: string) {
        // get file suffix
        const suffix = path.extname(fileName)
        const bucket = ''
        return new qiniu.rs.PutPolicy({
            scope: bucket,
            saveKey: `${randomUUID()}.${suffix}`,
        }).uploadToken()
    }
}
