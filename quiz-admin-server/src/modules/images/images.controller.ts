import { Body, Controller, Post } from '@nestjs/common'
import { StatusCheck } from 'common/status'
import { QiniuService } from 'modules/qiniu/qiniu.service'

@Controller('images')
export class ImagesController {
    constructor(private readonly qiniuService: QiniuService) {}

    @Post('token')
    uploadToken(@Body() params: any) {
        const filename = params.name
        const token = this.qiniuService.tokenDefault(filename)
        return StatusCheck.Ok(token)
    }
}
