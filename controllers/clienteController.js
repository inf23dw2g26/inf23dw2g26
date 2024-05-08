'use strict';

var utils = require('../utils/writer.js');
var Cliente = require('../service/ClienteService.js');

module.exports.clienteGET = function clienteGET (req, res, next) {
  Cliente.clienteGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientePOST = function clientePOST (req, res, next, body) {
  Cliente.clientePOST(body)
    .then(Cliente.cliente_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cliente_idDELETE = function cliente_idDELETE (req, res, next, id) {
  Cliente.cliente_idDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cliente_idGET = function cliente_idGET (req, res, next, id) {
  Cliente.cliente_idGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cliente_idPUT = function cliente_idPUT (req, res, next, body, id) {
  Cliente.cliente_idPUT(body, id)
    .then(Cliente.cliente_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
