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
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const insertQuery = "INSERT INTO users(username, email, password) VALUES ('parm2', 'parm2@gmail.com', '123456')";
            const insertAddress = "INSERT INTO addresses(user_id, city, country, street, pincode) VALUES ('New York', 'USA', '123 Ambedkar nagar', '10001') ";
            const res = yield client.query(insertQuery);
            const res1 = yield client.query(insertAddress);
            console.log('Insertion success', res);
        }
        catch (error) {
            console.log('errr', error);
        }
        finally {
            yield client.end();
        }
    });
}
insertData();
