const { Fabricante } = require('../models')
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

    res.status(200).json(fabricanteAActualizar)//VER XQ DEVUELVE EL ID
}
fabricantesController.updateFabricante = updateFabricante

const deleteFabricanteById = async (req, res) => {
    const id = req.params.id
    console.log(fabricante)
    const fabricanteEliminado = await Fabricante.destroy({ where: { id } })
    res.json({ mensaje: `el fabricante ${fabricanteEliminado} fue eliminado de la lista de contactos` })//BORRA PERO NO ME DEVUELVE EL MENSAJE 
}
fabricantesController.deleteFabricanteById = deleteFabricanteById


module.exports = fabricantesController