const { Router } = require('express')
const productoController = require('../controllers/producto.controller')
const { validarProductoId } = require('../middelware/producto.middelware')
const schemasValidador = require('../middelware/schemasValidador')
const productoSchema = require('../schemas/producto.schema')

const routes = Router()

routes.get('/', productoController.getProductos)
routes.get('/:id', validarProductoId, productoController.getProductoById)
routes.post('/', schemasValidador(productoSchema), productoController.addProducto)
routes.put('/:id', schemasValidador(productoSchema), validarProductoId, productoController.updateProducto)
routes.delete('/:id', validarProductoId, productoController.deleteProductoById)
routes.get('/:id/fabricantes', validarProductoId, productoController.fabricantesDelProductoConId)
routes.get('/:id/componentes', validarProductoId, productoController.componentesDelProductoConId)

module.exports = routes