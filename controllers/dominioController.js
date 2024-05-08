'use strict';

var utils = require('../utils/writer.js');
var Dominio = require('../service/DominioService.js');

module.exports.dominioGET = function dominioGET (req, res, next) {
  Dominio.dominioGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.dominio_idclienteGET = function dominio_idclienteGET (req, res, next, id) {
  Dominio.dominio_idclienteGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dominioPOST = function dominioPOST (req, res, next, body) {
  Dominio.dominioPOST(body)
    .then(Dominio.dominio_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dominio_idDELETE = function dominio_idDELETE (req, res, next, id) {
  Dominio.dominio_idDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dominio_idGET = function dominio_idGET (req, res, next, id) {
  Dominio.dominio_idGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dominio_idPUT = function dominio_idPUT (req, res, next, body, id) {
  Dominio.dominio_idPUT(body, id)
  .then(Dominio.dominio_idGET)  
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
