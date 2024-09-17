import { PrismaClient } from "@prisma/client";
import { Pool, neon, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import ws from "ws";

let prisma: PrismaClient | null = null;

export const getPrisma = async (connectionString: string) => {
	console.log("prisma db");
	try {
		if (!prisma) {
			neonConfig.webSocketConstructor = ws;
			const pool = new Pool({ connectionString });
			const adapter = new PrismaNeon(pool);

			prisma = new PrismaClient({ adapter });

			await prisma.$connect();
		}
		return prisma;
	} catch (error) {
		console.log("dbErr:", error);
		throw error;
	}
};

export const closePrisma = async () => {
	if (prisma) {
		await prisma.$disconnect();
		prisma = null;
	}
};
