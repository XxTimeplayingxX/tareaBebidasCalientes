const express = require('express');
const {v4: uuiv4} = require('uuid');

const router = express.Router();
const bebidaController = require('./../controller/bebidas-controller');



router.get('/', bebidaController.getAllBebidas)

router.get('/:bid', bebidaController.getBebidaById);

router.get('/bebidas/:bnombre', bebidaController.getBebidaByNombre);

 router.post('/', bebidaController.addBebida)

router.patch('/:bid', bebidaController.updateBebida);

router.delete = ('/:bid', bebidaController.deleteBebida)

 module.exports = router;