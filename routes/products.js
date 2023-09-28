




const express = require('express');
const routes = express.Router ();

// Importa los controladores
const productsControl = require('../control/productosControl');
const actualizarControl = require('../control/actualizarControl'); 
const logMiddleware = require('../middlewares/middleware');

router.post('/', middleware, productosControl.crear); 
router.get('/:id', productosControl.detalle); 
router.get('/', productosControl.listar); 
router.put('/:id', Middleware, actualizarControl.actualizar); 

module.exports = routes;