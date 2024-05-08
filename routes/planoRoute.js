const express = require('express');
const planoController = require('../controllers/planoController');

const router = express.Router();

// Rotas para manipular as operações CRUD das consultas
router.get('/plano', planoController.planoGET);
router.post('/plano', planoController.planoPOST);
router.get('/plano/:id', planoController.plano_idGET);
router.put('/plano/:id', planoController.plano_idPUT);
router.delete('/plano/:id', planoController.plano_idDELETE);

module.exports = router;