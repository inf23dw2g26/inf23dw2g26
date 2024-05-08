const express = require('express');
const clienteController = require('../controllers/clienteController');

const router = express.Router();

// Rotas para manipular as operações CRUD das consultas
router.get('/clientes', clienteController.clienteGET);
router.post('/clientes', clienteController.clientePOST);
router.get('/clientes/:id', clienteController.cliente_idGET);
router.put('/clientes/:id', clienteController.cliente_idPUT);
router.delete('/clientes/:id', clienteController.cliente_idDELETE);

module.exports = router;