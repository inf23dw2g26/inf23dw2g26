const express = require('express');
const dominioController = require('../controllers/dominioController');

const router = express.Router();

// Rotas para manipular as operações CRUD das consultas
router.get('/dominio', dominioController.dominioGET);
router.post('/dominio', dominioController.dominioPOST);
router.get('/dominio/:id', dominioController.dominio_idGET);
router.put('/dominio/:id', dominioController.dominio_idPUT);
router.delete('/dominio/:id', dominioController.dominio_idDELETE);

module.exports = router;