import { IsNotEmpty, IsString } from 'class-validator'

export class ImageTokenDto {
    @IsString()
    @IsNotEmpty()
    suffix: string
}
