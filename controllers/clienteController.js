'use strict';

var utils = require('../utils/writer.js');
var Cliente = require('../service/ClienteService.js');

module.exports.clienteGET = async function clienteGET (req, res, next) {
  Cliente.clienteGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getPagamentos = async function getPagamentos (req, res, next) {
  await Cliente.getPagamentos(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getDominios = async function getDominios (req, res, next) {
  await Cliente.getDominios(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getPlano = async function getPlano (req, res, next) {
  await Cliente.getPlano(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientePOST = async function clientePOST (req, res, next) {
  await Cliente.clientePOST(req.body)
    .then(Cliente.cliente_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cliente_idDELETE = async function cliente_idDELETE (req, res, next) {
  await Cliente.cliente_idDELETE(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cliente_idGET = async function cliente_idGET (req, res, next) {
  await Cliente.cliente_idGET(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cliente_idPUT = async function cliente_idPUT (req, res, next) {
  await Cliente.cliente_idPUT(req.body,req.params.id)
    .then(Cliente.cliente_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
