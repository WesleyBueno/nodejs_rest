//const mysql = require('mysql') //importa o mysql
const mysql = require('mysql2') //importa o mysql2

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'Um',
    password: '1234',
    database: 'agenda-petshop'
})

module.exports = conexao