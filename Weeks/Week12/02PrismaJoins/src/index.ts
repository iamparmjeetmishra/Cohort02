import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface UserInput {
   username: string;
   password: string;
   firstName: string;
   lastName: string
   email: string
}

async function insertUser(userInput: UserInput): Promise<void> {
   try {

      // destructure 
      const { username, password, firstName, lastName, email } = userInput
      
      // Optional validate input before creating the user
      if (!username || !password || !email) {
         throw new Error('Username, password and email are required')
      }

      // creating user
      const result = await prisma.user.create({
         data: {
            username,
            password, // Hashing todo
            firstName,
            lastName,
            email,
         }
      })
      console.log('Insert success:', result)
   } catch (error) {
      console.log('Insert failed:', error)
   } finally {
      // prisma disconnect
      await prisma.$disconnect()
   }

}

const newUser: UserInput = {
   username: 'Parm1',
   password: '123456',
   firstName: 'Parm',
   lastName: 'Jeet',
   email: 'parm1@gmail.com'
}

insertUser(newUser)