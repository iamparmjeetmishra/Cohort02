import {Client} from 'pg'

let POSTGRES_DB='postgresql://postgres:mysecretPassword@localhost:5432/postgres?sslmode=disable'

const client = new Client({
   connectionString: POSTGRES_DB
})


async function createAddressesTable() {
   await client.connect()
   const result = await client.query(`
         CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(255) NOT NULL,
            country VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
         )
      `)
   console.log(result)
}

createAddressesTable()