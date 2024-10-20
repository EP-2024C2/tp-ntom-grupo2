const { Fabricante, Producto, Componente } = require('../models')
const fabricantesController = {}


const addFabricante = async (req, res) => {
    const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body

    const fabricante = await Fabricante.create({
        nombre, direccion, numeroContacto, pathImgPerfil
    })
    res.json(fabricante)
}
fabricantesController.addFabricante = addFabricante

const getFabricantes = async (req, res) => {
    const fabricantes = await Fabricante.findAll()
    res.json(fabricantes)
}
fabricantesController.getFabricantes = getFabricantes

const getFabricanteById = async (req, res) => {
    const id = req.params.id
    const fabricante = await Fabricante.findOne({
        where: { id },
        attributes: ['nombre', 'direccion', 'numeroContacto', "pathImgPerfil"]
    })
    res.json(fabricante)
}
fabricantesController.getFabricanteById = getFabricanteById

const updateFabricante = async (req, res) => {
    const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body
    const id = req.params.id
    const fabricanteAActualizar = await Fabricante.update({
        nombre,
        direccion, numeroContacto,
        pathImgPerfil
    }, { where: { id } })
    const fabricanteActualizado= await Fabricante.findOne({
        where: {id},attributes: ['nombre', 'direccion', 'numeroContacto', "pathImgPerfil"]
    })
    res.status(200).json(fabricanteActualizado)
}
fabricantesController.updateFabricante = updateFabricante

const deleteFabricanteById = async (req, res) => {
    const id = req.params.id
    console.log(fabricante)
    const fabricanteEliminado = await Fabricante.destroy({ where: { id } })
    res.json({ mensaje: `el fabricante ${fabricanteEliminado} fue eliminado de la lista de contactos` })//BORRA PERO NO ME DEVUELVE EL MENSAJE 
}
fabricantesController.deleteFabricanteById = deleteFabricanteById

const productosDelFabricanteConId= async (req, res) => {
    const id =  req.params.id;
    const fabricante = await Fabricante.findOne({
        where: {id},
        attributes: ['id','nombre', 'direccion', 'numeroContacto', 'pathImgPerfil'],
        include: {
            model: Producto,
            attributes: ['id','nombre','descripcion','precio','pathImg'],
            through: {attributes:[]},
            include: {
                model: Componente,
                through: {attributes:[]},
                attributes: ['id','nombre','descripcion']
            }
        }
    });
    res.status(200).json(fabricante)
}
fabricantesController.productosDelFabricanteConId= productosDelFabricanteConId

module.exports = fabricantesController