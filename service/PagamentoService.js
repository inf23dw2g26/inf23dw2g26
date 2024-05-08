'use strict';
var mysql = require("../utils/db.js")

/**
 *
 * returns List
 **/
exports.pagamentoGET = function() {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM pagamento", function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
}
/**
 *
 * body Pagamento Pagamento que precisa ser adicionado , editado ou removido do negocio (optional)
 * no response value expected for this operation
 **/
exports.pagamentoPOST = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("INSERT INTO pagamento (valor, metodo_de_pagamento, numero_de_transacao, cliente) Values(?,?,?,?)", [body.valor, body.metodo_de_pagamento, body.numero_de_transacao, body.cliente], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      } else {
        console.log(res.insertId);
        resolve (res.insertId);
      }
    });
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.pagamento_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("DELETE FROM pagamento WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err); 
        console.log (res);
        reject();
      }
      else {
        console.log (res);
        resolve ({"deleted": id});
      }
    });
  });
}


/**
 *
 * id Long 
 * returns pagamento
 **/
exports.pagamento_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM pagamento WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


/**
 *
 * body Pagamento Pagamento que precisa ser adicionado , editado ou removido do negocio (optional)
 * id Long 
 * no response value expected for this operation
 **/
exports.pagamento_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("UPDATE pagamento set valor = COALESCE( ?, valor), metodo_de_pagamento = COALESCE( ?, metodo_de_pagamento), numero_de_transacao = COALESCE( ?, numero_de_transacao), cliente = COALESCE( ?, cliente)   WHERE id = ?", [body.valor, body.metodo_de_pagamento, body.numero_de_transacao, body.cliente, id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(id);
      }
    });
  });
}


/**
 *
 * id Long 
 * returns List
 **/
exports.pagamento_idclienteGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM pagamento where cliente=?",[id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
}

