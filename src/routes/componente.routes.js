const { Router } = require('express')
const componenteController = require('../controllers/componente.controller')
const { validarComponenteId } = require('../middelware/componente.middelware')
const schemasValidador = require('../middelware/schemasValidador')
const componenteSchema = require('../schemas/componente.schema')

const routes = Router()

routes.get('/', componenteController.getComponentes)
routes.get('/:id', validarComponenteId, componenteController.getComponenteById)
routes.post('/', ºcomponenteController.addComponente)
routes.put('/:id', schemasValidador(componenteSchema), validarComponenteId, componenteController.updateComponente)
routes.delete('/:id', validarComponenteId, componenteController.deleteComponenteById)
routes.get('/:id/productos', validarComponenteId, componenteController.componentesDelProductoConId)

module.exports = routes