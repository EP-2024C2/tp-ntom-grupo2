const { Router } = require('express')
const componenteController = require('../controllers/componente.controller')

const routes = Router()

routes.get('/', componenteController.getComponentes)
routes.get('/:id', componenteController.getComponenteById)
routes.post('/', componenteController.addComponente)
routes.put('/:id', componenteController.updateComponente)
routes.delete('/:id', componenteController.deleteComponenteById)


module.exports = routes