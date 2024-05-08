'use strict';

var utils = require('../utils/writer.js');
var PlanoS = require('../service/PlanoService.js');

module.exports.planoGET = function planoGET (req, res, next) {
  PlanoS.planoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.planoPOST = function planoPOST (req, res, next, body) {
  PlanoS.planoPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plano_idDELETE = function plano_idDELETE (req, res, next, id) {
  PlanoS.plano_idDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plano_idGET = function plano_idGET (req, res, next, id) {
  PlanoS.plano_idGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plano_idPUT = function plano_idPUT (req, res, next, body, id) {
  PlanoS.plano_idPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cliente_idplanoGET = function cliente_idplanoGET (req, res, next, id) {
  PlanoS.cliente_idplanoGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};