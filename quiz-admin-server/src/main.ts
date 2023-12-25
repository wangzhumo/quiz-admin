import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger, ValidationPipe } from '@nestjs/common'
import { AllExceptionFilter } from 'filters/all-exception.filter'

async function bootstrap() {
    const fastifyAdapter = new FastifyAdapter({
        logger: true,
    })
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter, {
        cors: true,
    })
    // Swagger
    const config = new DocumentBuilder()
        .setTitle('Quiz Admin API')
        .setDescription('The Quiz Admin API')
        .setVersion('1.0')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)
    // get httpAdapter
    const httpAdapter = app.get(HttpAdapterHost)

    // logger replace
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))

    // add Filter
    const logger = new Logger()
    app.useGlobalFilters(new AllExceptionFilter(logger, httpAdapter))

    // add pipes
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(8001, '0.0.0.0')
}

bootstrap()
