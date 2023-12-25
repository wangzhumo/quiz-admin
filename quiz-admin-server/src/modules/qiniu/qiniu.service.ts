import { Inject, Injectable } from '@nestjs/common'
import { QINIU_CONFIG_OPTIONS } from 'common/constants'
import QiniuOptions from './qiniuOptions.interface'
import * as qiniu from 'qiniu'
import { randomUUID } from 'crypto'
import * as dayjs from 'dayjs'

@Injectable()
export class QiniuService {
    private readonly DOMAIN = 'https://image.wangzhumo.com'
    private readonly UPLOAD_URL = 'https://upload-as0.qiniup.com'

    // create qiniu client
    constructor(@Inject(QINIU_CONFIG_OPTIONS) private options: QiniuOptions) {
        qiniu.conf.ACCESS_KEY = this.options.ak
        qiniu.conf.SECRET_KEY = this.options.sk
    }

    // upload image token
    token(bucket: string, suffix: string) {
        // get current time
        const currentDate = dayjs().format('YYYY/MM/DD')
        const saveKey = `${currentDate}/${randomUUID()}.${suffix}`
        const policy = new qiniu.rs.PutPolicy({
            scope: bucket,
            expires: 3600,
            saveKey: saveKey,
        })
        return {
            token: policy.uploadToken(),
            key: saveKey,
            domain: this.DOMAIN,
            uploadUrl: this.UPLOAD_URL,
        }
    }

    // default token
    tokenDefault(suffix: string) {
        // get file suffix
        const bucket = 'nestjs-quiz'
        return this.token(bucket, suffix)
    }
}
