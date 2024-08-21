import {Client} from 'pg'

let POSTGRES_DB='postgresql://postgres:mysecretPassword@localhost:5432/postgres?sslmode=disable'

const client = new Client({
   connectionString: POSTGRES_DB
})


async function insertUserData(user_id: number, city: string, country: string): Promise<void> {
   try {
      await client.connect()
      const result = await client.query(`
            INSERT INTO addresses (user_id, city, country)
            values($1, $2, $3)
         `, [user_id, city, country])
      console.log('user Address inserted successfully')
      console.log(result)

   } catch (error) {
      console.log('Error inserting addressdata:', error)
   } finally {
      await client.end() 
   }
}

insertUserData(2, 'Ludhiana', 'India')
   .then(() => console.log('Insert Operation Completed'))
   .catch(error => console.log('Insert Operation failed:', error))