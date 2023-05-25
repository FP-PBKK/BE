import { Sequelize } from "sequelize";
require('dotenv').config();
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

export const sequelize = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASS as string, {
        host: DB_HOST,
        port: Number(DB_PORT),
        dialect: DB_DIALECT as any,
});