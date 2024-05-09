'use strict';

var utils = require('../utils/writer.js');
var Dominio = require('../service/DominioService.js');

module.exports.dominioGET = async function dominioGET (req, res, next) {
  await Dominio.dominioGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.dominioPOST = async function dominioPOST (req, res, next) {
  await Dominio.dominioPOST(req.body)
    .then(Dominio.dominio_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dominio_idDELETE = async function dominio_idDELETE (req, res, next) {
  await Dominio.dominio_idDELETE(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dominio_idGET = async function dominio_idGET (req, res, next) {
  await Dominio.dominio_idGET(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dominio_idPUT = async function dominio_idPUT (req, res, next) {
  await Dominio.dominio_idPUT(req.body,req.params.id)
  .then(Dominio.dominio_idGET)  
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
