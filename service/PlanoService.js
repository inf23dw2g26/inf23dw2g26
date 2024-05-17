'use strict';
var mysql = require("../utils/db.js")

exports.cliente_idplanoGET = function(id) {
  return new Promise((resolve, reject) => {
    mysql.query("SELECT * FROM cliente c JOIN plano p ON c.plano = p.id WHERE c.id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}

exports.planoGET = function() {
  return new Promise((resolve, reject) => {
    mysql.query("SELECT * FROM plano", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}

exports.planoPOST = function(body) {
  return new Promise((resolve, reject) => {
    console.log(body);
    mysql.query("INSERT INTO plano (tipo_de_plano, periodicidade, preco, armazenamento, numero_de_contas_email, numero_de_dominios, largura_de_banda, fidelizacao) VALUES(?,?,?,?,?,?,?,?)", 
    [body.tipo_de_plano, body.periodicidade, body.preco, body.armazenamento, body.numero_de_contas_email, body.numero_de_dominios, body.largura_de_banda, body.fidelizacao], 
    function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res.insertId);
        resolve({ id: res.insertId });
      }
    });
  });
}

exports.plano_idDELETE = function(id) {
  return new Promise((resolve, reject) => {
    mysql.query("DELETE FROM plano WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err); 
        reject(new Error('Failed to delete'));
      } else {
        console.log(res);
        resolve({ deleted: id });
      }
    });
  });
}

exports.plano_idGET = function(id) {
  return new Promise((resolve, reject) => {
    mysql.query("SELECT * FROM plano WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}

exports.plano_idPUT = function(body, id) {
  return new Promise((resolve, reject) => {
    console.log(body);
    mysql.query("UPDATE plano SET tipo_de_plano = COALESCE(?, tipo_de_plano), periodicidade = COALESCE(?, periodicidade), preco = COALESCE(?, preco), armazenamento = COALESCE(?, armazenamento), numero_de_contas_email = COALESCE(?, numero_de_contas_email), numero_de_dominios = COALESCE(?, numero_de_dominios), largura_de_banda = COALESCE(?, largura_de_banda), fidelizacao = COALESCE(?, fidelizacao) WHERE id = ?", 
    [body.tipo_de_plano, body.periodicidade, body.preco, body.armazenamento, body.numero_de_contas_email, body.numero_de_dominios, body.largura_de_banda, body.fidelizacao, id], 
    function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve({ updated: id });
      }
    });
  });
}
