const mysql = require('mysql2/promise');

const conexion = mysql.createPool({
    host:'localhost', //127.0.0.1
    port:3306,
    database:'CRUD',
    user:'root',
    password:'myAdmin82'
})

module.exports = conexion;