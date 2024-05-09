'use strict';

var utils = require('../utils/writer.js');
var Pagamento = require('../service/PagamentoService.js');

module.exports.pagamento_get = async function pagamento_get (req, res, next) {
  console.log("Olá mundo !");
  Pagamento.pagamentoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamentoPOST = async function pagamentoPOST (req, res, next) {
  await Pagamento.pagamentoPOST(req.body)
    .then(Pagamento.pagamento_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idGET = async function pagamento_idGET (req, res, next) {
  await Pagamento.pagamento_idGET(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idPUT = async function pagamento_idPUT (req, res, next) {
  await Pagamento.pagamento_idPUT(req.body, req.params.id)
    .then(Pagamento.pagamento_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagamento_idDELETE = async function pagamento_idDELETE (req, res, next) {
  await Pagamento.pagamento_idDELETE(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};