import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function insertUser(
	username: string,
	password: string,
	firstName: string,
	lastName: string
) {
	const res = await prisma.user.create({
		data: {
			email: username,
			password,
			firstName,
			lastName,
      }, 
      select: {
         id: true,
         email: true,
         password: true,
         firstName: true
      }
	});
	console.log(res);
}
insertUser('parm4@gmail.com', '123456', 'Parm4', 'm')