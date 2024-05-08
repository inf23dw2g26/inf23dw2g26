const express = require('express');
const clienteController = require('../controllers/clienteController');

const router = express.Router();

// Rotas para manipular as operações CRUD das consultas
router.get('/cliente', clienteController.clienteGET);
router.post('/cliente', clienteController.clientePOST);
router.get('/cliente/:id', clienteController.cliente_idGET);
router.put('/cliente/:id', clienteController.cliente_idPUT);
router.delete('/cliente/:id', clienteController.cliente_idDELETE);
router.get('/cliente/:id/pagamento', clienteController.getPagamentos);
router.get('/cliente/:id/dominio', clienteController.getDominios);
router.get('/cliente/:id/plano', clienteController.getPlano);

module.exports = router;