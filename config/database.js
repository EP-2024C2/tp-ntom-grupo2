require('dotenv').config();

const { Sequelize } = require('sequelize');

const dbName = process.env.DB_NAME || 'database.sqlite';
const dbUser = process.env.DB_USER || '';
const dbPass = process.env.DB_PASS || '';
const dbHost = process.env.DB_HOST || '';
const dbDialect = process.env.DB_DIALECT || 'sqlite';

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: dbDialect,
    storage: dbDialect === 'sqlite' ? dbName : undefined,
});

module.exports = sequelize;