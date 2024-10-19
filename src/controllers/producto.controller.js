const { Producto } = require('../models')
const productosController= {}

const getProductos = async (req,res) => {
    const productos = await Producto.findAll()
    res.json(productos)
}
productosController.getProductos = getProductos

const addProducto = async (req,res) => {
    const{nombre, descripcion,precio,pathImg} = req.body

    const producto = await Producto.create({
        nombre, descripcion,precio,pathImg 
    })
    res.json(producto)
}
productosController.addProducto= addProducto
module.exports = productosController