'use strict';

var utils = require('../utils/writer.js');
var PlanoS = require('../service/PlanoService.js');

module.exports.planoGET = async function planoGET (req, res, next) {
  PlanoS.planoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.planoPOST = async function planoPOST (req, res, next) {
  await PlanoS.planoPOST(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plano_idDELETE = async function plano_idDELETE (req, res, next) {
  await PlanoS.plano_idDELETE(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plano_idGET = async function plano_idGET (req, res, next) {
  await PlanoS.plano_idGET(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plano_idPUT = async function plano_idPUT (req, res, next) {
  await PlanoS.plano_idPUT(req.body,req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};