'use strict';

var utils = require('../utils/writer.js');
var Pagamento = require('../service/PagamentoService');

module.exports.pagamento_get = function pagamento_get (req, res, next) {
  console.log("Olá mundo !");
  Pagamento.pagamentoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamentoPOST = function pagamentoPOST (req, res, next, body) {
  Pagamento.pagamentoPOST(body)
    .then(Pagamento.pagamento_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idGET = function pagamento_idGET (req, res, next, id) {
  Pagamento.pagamento_idGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idPUT = function pagamento_idPUT (req, res, next, body, id) {
  Pagamento.pagamento_idPUT(body, id)
    .then(Pagamento.pagamento_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idDELETE = function pagamento_idDELETE (req, res, next, id) {
  Pagamento.pagamento_idDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idclienteGET = function pagamento_idclienteGET (req, res, next, id) {
  Pagamento.pagamento_idclienteGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
