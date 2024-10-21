const { Producto, Fabricante, Componente } = require('../models')
const productosController= {}

const addProducto = async (req,res) => {
    const{nombre, descripcion,precio,pathImg} = req.body
    try{
        const producto = await Producto.create({
        nombre, descripcion,precio,pathImg 
        })
        res.status(201).json(producto)
    }catch{
        res.status(400).json('el servidor no puede procesar la solicitud')
    }
}
productosController.addProducto= addProducto

const getProductos = async (req,res) => {
    const productos = await Producto.findAll()
    res.status(200).json(productos)
}
productosController.getProductos = getProductos



const getProductoById = async (req,res) => {
    const id = req.params.id
    const producto = await Producto.findOne({
        where: {id},
        attributes: ['nombre','descripcion','precio']
    })
    res.status(200).json(producto)
}
productosController.getProductoById = getProductoById

const updateProducto = async (req,res) =>{
    const{nombre,descripcion,precio,pathImg} = req.body
    const id = req.params.id
    const productoAActualizar = await Producto.update({
        nombre:nombre,
        descripcion:descripcion,
        pathImg:pathImg,
        precio:precio,
    },{where: {id}})
    const prodActualizado= await Producto.findOne({
        where: {id},attributes: ['id','nombre','descripcion','precio','pathImg']
    })
    res.status(200).json(prodActualizado)
}
productosController.updateProducto= updateProducto

const deleteProductoById = async (req,res) => {
    const id = req.params.id
    try{
        await Producto.destroy({where: {id}});
        res.status(200).json({mensaje:`el producto fue eliminado`})
    } catch (error){
        res.status(500).json({mensaje: `error al elimninar el producto`})
    } 
}
productosController.deleteProductoById = deleteProductoById

const fabricantesDelProductoConId= async (req, res) => {
    const id =  req.params.id;
    const producto = await Producto.findOne({
        where: {id},
        attributes: ['id','nombre','descripcion','precio','pathImg'],
        include: {
            model: Fabricante,
            attributes: ['id','nombre', 'direccion', 'numeroContacto', 'pathImgPerfil'],    
            through: {attributes:[]}
        }
    });
    res.status(200).json(producto)
}
productosController.fabricantesDelProductoConId= fabricantesDelProductoConId

const componentesDelProductoConId= async (req, res) => {
    const id =  req.params.id;
    const producto = await Producto.findOne({
        where: {id},
        attributes: ['id','nombre','descripcion','precio','pathImg'],
        include: {
            model: Componente,
            attributes: ['id','nombre','descripcion'],    
            through: {attributes:[]}
        }
    });
    res.status(200).json(producto)
}
productosController.componentesDelProductoConId= componentesDelProductoConId
module.exports = productosController