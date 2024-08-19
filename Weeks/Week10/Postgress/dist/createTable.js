"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require('dotenv').config();
// import DB_URL = process.env.POSTGRES_DB
const client = new pg_1.Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword'
});
// console.log(client)
// client.connect()
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const result = yield client.query(`
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
         `);
            console.log(result);
        }
        catch (error) {
            console.log('errr', error);
        }
        finally {
            yield client.end();
        }
    });
}
createUsersTable();
