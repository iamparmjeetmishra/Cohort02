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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(userInput) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // destructure 
            const { username, password, firstName, lastName, email } = userInput;
            // Optional validate input before creating the user
            if (!username || !password || !email) {
                throw new Error('Username, password and email are required');
            }
            // creating user
            const result = yield prisma.user.create({
                data: {
                    username,
                    password, // Hashing todo
                    firstName,
                    lastName,
                    email,
                }
            });
            console.log('Insert success:', result);
        }
        catch (error) {
            console.log('Insert failed:', error);
        }
        finally {
            // prisma disconnect
            yield prisma.$disconnect();
        }
    });
}
const newUser = {
    username: 'Parm1',
    password: '123456',
    firstName: 'Parm',
    lastName: 'Jeet',
    email: 'parm1@gmail.com'
};
insertUser(newUser);
