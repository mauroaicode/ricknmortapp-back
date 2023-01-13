
import dotenv from 'dotenv';
import {Sequelize} from "sequelize";
dotenv.config({path:'.env'})

// @ts-ignore
const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD ?? '', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define:{
        timestamps: true
    },
})

export default db;
