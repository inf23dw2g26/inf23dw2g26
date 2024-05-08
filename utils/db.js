"use strict"

const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "secret",
  database: "webhoster",
})

connection.connect((err) => {
  if (err) {
    console.log("Erro na conexão com a base de dados")
    throw err
  }

  console.log("Conexão com a base de dados bem sucedida!!")
})

module.exports = connection
