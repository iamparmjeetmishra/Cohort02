import { Client } from "pg";
require("dotenv").config();

// import DB_URL = process.env.POSTGRES_DB

// async function to fetch user data from teh db given an email
async function getUser(email: string) {
	const client = new Client({
		host: "localhost",
		port: 5432,
		database: "postgres",
		user: "postgres",
		password: "mysecretpassword",
	});

	// console.log(client);

	// client.connect()

	try {
		await client.connect();
		const query = "SELECT * FROM users WHERE email = $1";
		const values = [email];
		const res = await client.query(query, values);
		if (res.rows.length > 0) {
			console.log("User Found", res.rows[0]);
			return res.rows[0];
		} else {
			console.log("No User found with the given email");
			return null;
		}
	} catch (error) {
		console.log("errr", error);
	} finally {
		await client.end();
	}
}

getUser("parm@gmail.com").catch(console.error);