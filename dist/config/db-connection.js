"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config({ path: '.env' });
// @ts-ignore
const db = new sequelize_1.Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, (_a = process.env.DB_PASSWORD) !== null && _a !== void 0 ? _a : '', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
});
exports.default = db;
//# sourceMappingURL=db-connection.js.map