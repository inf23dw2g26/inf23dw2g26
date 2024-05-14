'use strict';
var mysql = require("../utils/db.js")

/**
 *
 * returns List
 **/
exports.dominioGET = function(){
  return new Promise(function(resolve, reject) {
  mysql.query("SELECT * FROM dominio", function (err, res) {
    if (err) {
      console.log(err);
      reject (err);
    }
    else {
      console.log(res);
      resolve(res);
    }
  });
})};


/**
 *
 * body Dominio Dominio que precisa ser adicionado , editado ou removido do negocio (optional)
 * no response value expected for this operation
 **/
exports.dominioPOST = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("INSERT INTO dominio (nome, codigo_TLD, estado, data_de_inicio, data_de_fim, cliente) Values(?,?,?,?,?,?)", [body.nome, body.codigo_TLD, body.estado, body.data_de_inicio, body.data_de_fim, body.cliente], function (err, res) {
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
exports.dominio_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("DELETE FROM dominio WHERE id = ?", [id], function (err, res) {
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
 * returns List
 **/
exports.dominio_idclienteGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM dominio where cliente=?",[id], function (err, res) {
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
 * id Long 
 * returns dominio
 **/
exports.dominio_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM dominio WHERE id = ?", [id], function (err, res) {
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
 * body Dominio Dominio que precisa ser adicionado , editado ou removido do negocio (optional)
 * id Long 
 * no response value expected for this operation
 **/
exports.dominio_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("UPDATE dominio set nome = COALESCE( ?, nome), codigo_TLD = COALESCE( ?, codigo_TLD), estado = COALESCE( ?, estado), data_de_inicio = COALESCE( ?, data_de_inicio), data_de_fim = COALESCE( ?, data_de_fim), cliente = COALESCE( ?, cliente)   WHERE id = ?", [body.nome, body.codigo_TLD, body.estado, body.data_de_inico, body.data_de_fim, body.cliente, id], function (err, res) {
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
