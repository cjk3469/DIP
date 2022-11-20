const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'test_user',
    password : 'test_pw',
    database : 'test_db'
});

module.exports = db;