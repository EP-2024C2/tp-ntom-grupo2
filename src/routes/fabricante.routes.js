const { Router } = require('express')
const fabricanteController = require('../controllers/fabricante.controller')
const { validarFabricanteId } = require('../middelware/fabricante.middelware')
const schemasValidador = require('../middelware/schemasValidador')
const fabricanteSchema = require('../schemas/fabricante.schema')

const routes = Router()

routes.get('/', fabricanteController.getFabricantes)
routes.get('/:id', validarFabricanteId, fabricanteController.getFabricanteById)
routes.post('/', schemasValidador(fabricanteSchema), fabricanteController.addFabricante)
routes.put('/:id', schemasValidador(fabricanteSchema), validarFabricanteId, fabricanteController.updateFabricante)
routes.delete('/:id', validarFabricanteId, fabricanteController.deleteFabricanteById)
routes.get('/:id/productos', validarFabricanteId, fabricanteController.productosDelFabricanteConId)

module.exports = routes