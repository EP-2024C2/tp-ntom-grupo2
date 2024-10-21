const { Router } = require('express')
const fabricanteController = require('../controllers/fabricante.controller')
const {validarFabricanteId} = require('../middelware/fabricante.middelware')

const routes = Router()

routes.get('/', fabricanteController.getFabricantes)
routes.get('/:id', validarFabricanteId, fabricanteController.getFabricanteById)
routes.post('/', fabricanteController.addFabricante)
routes.put('/:id', validarFabricanteId, fabricanteController.updateFabricante)
routes.delete('/:id', validarFabricanteId, fabricanteController.deleteFabricanteById)
routes.get('/:id/productos',fabricanteController.productosDelFabricanteConId)
module.exports = routes