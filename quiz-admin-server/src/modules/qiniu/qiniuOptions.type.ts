import { ModuleMetadata } from '@nestjs/common'
import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface'
import QiniuOptions from './qiniuOptions.interface'

type QiniuAsyncOptions = Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider<QiniuOptions>, 'useFactory' | 'inject'>

export default QiniuAsyncOptions
