const { Router } = require('express')
const productoController = require('../controllers/producto.controller')
const {validarProductoId} = require('../middelware/producto.middelware')

const routes = Router()

routes.get('/' ,productoController.getProductos )
routes.get('/:id',validarProductoId, productoController.getProductoById)
routes.post('/' ,productoController.addProducto )
routes.put('/:id',validarProductoId, productoController.updateProducto)
routes.delete('/:id',validarProductoId, productoController.deleteProductoById)
routes.get('/:id/fabricantes',productoController.fabricantesDelProductoConId)
routes.get('/:id/componentes',productoController.componentesDelProductoConId)


module.exports = routes