'use strict';
var mysql = require("../utils/db.js")

/**
 *
 * returns List
 **/
exports.clienteGET = function() {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM cliente", function (err, res) {
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
  
  exports.getPagamentos = function(id) {
    return new Promise(function(resolve, reject) {
      mysql.query("SELECT * FROM pagamento WHERE cliente = ?", [id], function (err, res) {
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
  exports.getDominios = function(id) {
    return new Promise(function(resolve, reject) {
      mysql.query("SELECT * FROM dominio WHERE cliente = ?", [id], function (err, res) {
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
  exports.getPlano = function(clienteId) {
    return new Promise((resolve, reject) => {
      // Primeiro, consulta a tabela de clientes para obter o ID do plano associado ao cliente
      mysql.query("SELECT plano FROM cliente WHERE id = ?", [clienteId], (err, res) => {
        if (err) {
          console.log(err);
          reject(err);
        } else if (res.length === 0) {
          // Se o cliente não for encontrado ou não tiver um plano associado
          reject(new Error(`Cliente com ID ${clienteId} não possui plano associado.`));
        } else {
          // Obter o ID do plano a partir da resposta
          const planoId = res[0].plano;
  
          // Em seguida, consulta a tabela de planos para obter os detalhes do plano
          mysql.query("SELECT * FROM plano WHERE id = ?", [planoId], (err, res) => {
            if (err) {
              console.log(err);
              reject(err);
            } else if (res.length === 0) {
              // Se o plano não for encontrado
              reject(new Error(`Plano com ID ${planoId} não encontrado.`));
            } else {
              // Retornar os detalhes do plano encontrado
              resolve(res[0]);
            }
          });
        }
      });
    });
  };
  
      

/**
 *
 * body Cliente Cliente a ser adicionado , editado ou removido do negocio. (optional)
 * no response value expected for this operation
 **/
exports.clientePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
    mysql.query("INSERT INTO cliente (nome, tipo_de_conta, numero_fiscal, email, contacto, plano, periodicidade_de_pagamento, data_ultimo_pagamento) Values(?,?,?,?,?,?,?,?)", [body.nome, body.tipo_de_conta, body.numero_fiscal, body.email, body.contacto, body.plano, body.periodicidade_de_pagamento, body.data_ultimo_pagamento], function (err, res) {
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
exports.cliente_idDELETE = function(id) {
  return new Promise((resolve, reject) => {
    // Inicia uma transação
    mysql.beginTransaction((err) => {
      if (err) {
        console.log(err);
        return reject(err);
      }

      // Deleta pagamentos associados ao cliente
      mysql.query("DELETE FROM pagamento WHERE cliente = ?", [id], (err, res) => {
        if (err) {
          // Se ocorrer erro ao deletar os pagamentos, faz rollback da transação
          return mysql.rollback(() => {
            console.log(err);
            reject(err);
          });
        }

        // Deleta domínios associados ao cliente
        mysql.query("DELETE FROM dominio WHERE cliente = ?", [id], (err, res) => {
          if (err) {
            // Se ocorrer erro ao deletar os domínios, faz rollback da transação
            return mysql.rollback(() => {
              console.log(err);
              reject(err);
            });
          }

          // Deleta o próprio cliente
          mysql.query("DELETE FROM cliente WHERE id = ?", [id], (err, res) => {
            if (err || !res.affectedRows) {
              // Se ocorrer erro ao deletar o cliente, faz rollback da transação
              return mysql.rollback(() => {
                console.log(err);
                console.log(res);
                reject();
              });
            }

            // Commit da transação para confirmar as mudanças
            mysql.commit((err) => {
              if (err) {
                // Se ocorrer erro ao fazer commit, faz rollback
                return mysql.rollback(() => {
                  console.log(err);
                  reject(err);
                });
              }

              // Se tudo ocorreu bem, resolve a promessa
              console.log(res);
              resolve({"deleted": id});
            });
          });
        });
      });
    });
  });
};
/**
 *
 * id Long 
 * returns cliente
 **/
exports.cliente_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM cliente WHERE id = ?", [id], function (err, res) {
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
 * body Cliente Cliente a ser adicionado , editado ou removido do negocio. (optional)
 * id Long 
 * no response value expected for this operation
 **/
exports.cliente_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
    mysql.query("UPDATE cliente set  nome = COALESCE( ?, nome), tipo_de_conta = COALESCE( ?, tipo_de_conta), numero_fiscal = COALESCE( ?, numero_fiscal), email = COALESCE( ?, email), contacto = COALESCE( ?, contacto), plano = COALESCE( ?, plano), periodicidade_de_pagamento = COALESCE( ?, periodicidade_de_pagamento), data_ultimo_pagamento = COALESCE( ?, data_ultimo_pagamento)   WHERE id = ?", [body.nome, body.tipo_de_conta, body.numero_fiscal, body.email, body.contacto, body.plano, body.periodicidade_de_pagamento, body.data_ultimo_pagamento, id], function (err, res) {
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