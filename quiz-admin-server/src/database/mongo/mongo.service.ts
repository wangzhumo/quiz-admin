import { Injectable, type OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma-mongodb/client'
@Injectable()
export class PrismaMongoService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}