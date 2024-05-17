'use strict';

var utils = require('../utils/writer.js');
var PlanoS = require('../service/PlanoService.js');

module.exports.planoGET = async function planoGET(req, res, next) {
  try {
    const response = await PlanoS.planoGET();
    utils.writeJson(res, response, 200);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};

module.exports.planoPOST = async function planoPOST(req, res, next) {
  try {
    const response = await PlanoS.planoPOST(req.body);
    utils.writeJson(res, response, 201);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};

module.exports.plano_idDELETE = async function plano_idDELETE(req, res, next) {
  try {
    const response = await PlanoS.plano_idDELETE(req.params.id);
    utils.writeJson(res, response, 200);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};

module.exports.plano_idGET = async function plano_idGET(req, res, next) {
  try {
    const response = await PlanoS.plano_idGET(req.params.id);
    utils.writeJson(res, response, 200);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};

module.exports.plano_idPUT = async function plano_idPUT(req, res, next) {
  try {
    const response = await PlanoS.plano_idPUT(req.body, req.params.id);
    utils.writeJson(res, response, 200);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};
