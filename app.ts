import dotenv from 'dotenv'
import Server from "./models/server";

// Configurar don.env
dotenv.config({path: '.env'})

const server = new Server()
server.listen()
