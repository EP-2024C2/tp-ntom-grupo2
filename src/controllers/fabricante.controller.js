const { Fabricante, Producto, Componente } = require('../models')
const fabricantesController = {}


const addFabricante = async (req, res) => {
    const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body
    try{
        const fabricante = await Fabricante.create({
        nombre, direccion, numeroContacto, pathImgPerfil
        })
        res.status(201).json(fabricante)
    }catch{
        res.status(400).json('el servidor no puede procesar la solicitud')
    }
}
fabricantesController.addFabricante = addFabricante

const getFabricantes = async (req, res) => {
    const fabricantes = await Fabricante.findAll()
    res.status(200).json(fabricantes)
}
fabricantesController.getFabricantes = getFabricantes

const getFabricanteById = async (req, res) => {
    const id = req.params.id
    const fabricante = await Fabricante.findOne({
        where: { id },
        attributes: ['nombre', 'direccion', 'numeroContacto', "pathImgPerfil"]
    })
    res.status(200).json(fabricante)
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
    const fabricanteActualizado= await fabricanteAActualizar.findOne({
        where: {id},attributes: ['nombre', 'direccion', 'numeroContacto', "pathImgPerfil"]
    })
    res.status(200).json(fabricanteActualizado)
}
fabricantesController.updateFabricante = updateFabricante

const deleteFabricanteById = async (req, res) => {
    const id = req.params.id;
    try{
        const fabricanteEliminado = await Fabricante.destroy({ where: { id } })
        res.status(200).json({ mensaje: `el fabricante ${fabricanteEliminado} fue eliminado de la lista de contactos` })
    }catch{
        return res.status(500).send('Ocurrio un error con el servidor')
    }
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