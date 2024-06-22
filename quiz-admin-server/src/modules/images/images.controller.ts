import { Body, Controller, Post } from '@nestjs/common'
import { StatusCheck } from 'common/status'
import type { QiniuService } from 'modules/qiniu/qiniu.service'
import type { ImageTokenDto } from './dto/token.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('images')
export class ImagesController {
    constructor(private readonly qiniuService: QiniuService) {}

    @Post('token')
    @ApiTags('images')
    uploadToken(@Body() params: ImageTokenDto) {
        const suffix = params.suffix
        const tokenKey = this.qiniuService.tokenDefault(suffix)
        return StatusCheck.Ok(tokenKey)
    }
}
