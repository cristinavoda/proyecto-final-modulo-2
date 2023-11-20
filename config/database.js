require("dotenv").config()
const mysql = require("mysql2")

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = programacion

const pool = mysql.createPool({
    host:3306,
    user: root,
    password: 1234,
})


module.exports = pool.promise();
