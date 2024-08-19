import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface UpdateParams {
   firstName: string;
   lastName: string
}

async function updateUser(username: string, { firstName, lastName }: UpdateParams) {
   const res = await prisma.user.update({
      where: { email: username },
      data: {
         firstName,
         lastName
      }
   })
   console.log('update', res)
}


updateUser('parm4@gmail.com', {
   firstName: 'Parmjeet',
   lastName: 'Mishra'
})