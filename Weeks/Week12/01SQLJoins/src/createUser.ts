import {Client} from 'pg'

let POSTGRES_DB='postgresql://postgres:mysecretPassword@localhost:5432/postgres?sslmode=disable'

const client = new Client({
   connectionString: POSTGRES_DB
})


async function createUsersTable() {
   await client.connect()
   const result = await client.query(`
         CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
         )
      `)
   console.log(result)
}

createUsersTable()