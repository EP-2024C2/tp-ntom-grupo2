const { Router } = require('express')
const componenteController = require('../controllers/componente.controller')
const {validarComponenteId} = require('../middelware/componente.middelware')

const routes = Router()

routes.get('/', componenteController.getComponentes)
routes.get('/:id', validarComponenteId, componenteController.getComponenteById)
routes.post('/', componenteController.addComponente)
routes.put('/:id', validarComponenteId, componenteController.updateComponente)
routes.delete('/:id', validarComponenteId, componenteController.deleteComponenteById)
routes.get('/:id/productos',componenteController.componentesDelProductoConId)

module.exports = routes