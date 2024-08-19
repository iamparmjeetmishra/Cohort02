import {Client} from 'pg'
require('dotenv').config()

// import DB_URL = process.env.POSTGRES_DB

const client = new Client({
   host: 'localhost',
   port: 5432,
   database: 'postgres',
   user: 'postgres',
   password: 'mysecretpassword'
})

// console.log(client)

// client.connect()

async function createUsersTable() {
   await client.connect()
   try {

      const result = await client.query(`
            CREATE TABLE users (
               id SERIAL PRIMARY KEY,
               username VARCHAR(50) UNIQUE NOT NULL,
               email VARCHAR(255) UNIQUE NOT NULL,
               password VARCHAR(255) NOT NULL,
               created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(100) NOT NULL,
            pincode VARCHAR(100),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES uesrs(id) ON DELETE CASCASE
            )
         `)
      
      console.log(result)
   } catch (error) {
      console.log('errr', error)
   } finally {
      await client.end()
   }
}

createUsersTable()