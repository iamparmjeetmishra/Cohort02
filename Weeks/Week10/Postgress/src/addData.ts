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

async function insertData() {
   await client.connect()
   try {
      const insertQuery = "INSERT INTO users(username, email, password) VALUES ('parm2', 'parm2@gmail.com', '123456')"
      const insertAddress = "INSERT INTO addresses(user_id, city, country, street, pincode) VALUES ('New York', 'USA', '123 Ambedkar nagar', '10001') "
      const res = await client.query(insertQuery)
      const res1 = await client.query(insertAddress)
      console.log('Insertion success', res)
   } catch (error) {
      console.log('errr', error)
   } finally {
      await client.end()
   }
}

insertData()