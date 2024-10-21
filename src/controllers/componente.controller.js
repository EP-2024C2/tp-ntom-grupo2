const { Fabricante, Producto, Componente } = require('../models')
const componenteController = {}


const addComponente = async (req, res) => {
    const { nombre,descripcion } = req.body

    const componente = await Componente.create({
        nombre,descripcion
    })
    res.json(componente)
}
componenteController.addComponente = addComponente

const getComponentes = async (req, res) => {
    const componentes = await Componente.findAll()
    res.json(componentes)
}
componenteController.getComponentes = getComponentes

const getComponenteById = async (req, res) => {
    const id = req.params.id
    const componente = await Componente.findOne({
        where: { id },
        attributes: ['nombre', 'descripcion']
    })
    res.json(componente)
}
componenteController.getComponenteById= getComponenteById

const updateComponente = async (req, res) => {
    const { nombre, descripcion } = req.body
    const id = req.params.id
    const componenteAActualizar = await Componente.update({
        nombre, descripcion
    }, { where: { id } })
    const componenteActualizado= await Componente.findOne({
        where: {id},attributes: ['nombre','descripcion']
    })
    res.status(200).json(componenteActualizado)
}
componenteController.updateComponente = updateComponente

const deleteComponenteById = async (req, res) => {
    const id = req.params.id
    const componenteEliminado = await Componente.destroy({ where: { id } })
    res.json({ mensaje: `el componente fue eliminado` })//BORRA PERO NO ME DEVUELVE EL MENSAJE 
}
componenteController.deleteComponenteById = deleteComponenteById

const componentesDelProductoConId= async (req, res) => {
    const id =  req.params.id;
    const componente = await Componente.findOne({
        where: {id},
        attributes: ['id','nombre','descripcion'],
        include: {
            model: Producto,
            attributes: ['id','nombre','descripcion','precio','pathImg'],
            through: {attributes:[]},
        }
    });
    res.status(200).json(componente)
}
componenteController.componentesDelProductoConId=componentesDelProductoConId
module.exports = componenteController