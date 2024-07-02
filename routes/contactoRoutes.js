//IMPORTACION E INSTANCIADO DE EXPRESS
const express = require("express");
const router = express.Router();

//IMPORTACION DE Controller
const contactoController = require('../controllers/Controller');

//RUTAS
router.get('/', contactoController.getAllConsultas);
router.get('/:id_consulta', contactoController.getConsultaById);
router.post('/', contactoController.postConsulta);
router.put('/:id_consulta', contactoController.updateConsulta);
router.delete('/:id_consulta', contactoController.deleteConsulta);

//EXPORTACION DEL MODULO
module.exports = router;
