const express = require('express');
const pagamentoController = require('../controllers/pagamentoController');

const router = express.Router();

// Rotas para manipular as operações CRUD das consultas
router.get('/pagamento', pagamentoController.pagamento_get);
router.post('/pagamento', pagamentoController.pagamentoPOST);
router.get('/pagamento/:id', pagamentoController.pagamento_idGET);
router.put('/pagamento/:id', pagamentoController.pagamento_idPUT);
router.delete('/pagamento/:id', pagamentoController.pagamento_idDELETE);

module.exports = router;