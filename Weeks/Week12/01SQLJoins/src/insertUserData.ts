import {Client} from 'pg'

let POSTGRES_DB='postgresql://postgres:mysecretPassword@localhost:5432/postgres?sslmode=disable'

const client = new Client({
   connectionString: POSTGRES_DB
})


async function insertUserData(username: string, password: string, email: string): Promise<void> {
   try {
      await client.connect()
      const result = await client.query(`
            INSERT INTO users (username, password, email)
            values($1, $2, $3)
         `, [username, password, email])
      console.log('user inserted successfully')
      console.log(result)

   } catch (error) {
      console.log('Error inserting userdata:', error)
   } finally {
      await client.end() 
   }
}

insertUserData('Userthree', 'password123', 'userthree@gmail.com')
   .then(() => console.log('Insert Operation Completed'))
   .catch(error => console.log('Insert Operation failed:', error))