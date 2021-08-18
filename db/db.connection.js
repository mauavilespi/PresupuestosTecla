//! Import the necessary modules
//? Sequelize
const Sequelize = require('sequelize');

//? Dotenv
require('dotenv').config();

//! Conecction with the database
const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mssql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialectOptions: {
        options: {
            encrypt: true
        }
    }
});

//! Import module sequelize
module.exports = sequelize;