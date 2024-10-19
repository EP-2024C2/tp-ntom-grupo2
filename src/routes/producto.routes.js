const { Router } = require('express')
const productoController = require('../controllers/producto.controller')

const routes = Router()

routes.get('/' ,productoController.getProductos )
routes.post('/' ,productoController.addProducto )


module.exports = routes