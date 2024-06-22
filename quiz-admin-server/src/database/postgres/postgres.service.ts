import { Injectable, type OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma-postgres/client";
@Injectable()
export class PrismaPostgresService
	extends PrismaClient
	implements OnModuleInit
{
	async onModuleInit() {
		await this.$connect();
	}
}
