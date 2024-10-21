const { Fabricante, Producto, Componente } = require('../models')
const componenteController = {}


const addComponente = async (req, res) => {
    const { nombre,descripcion } = req.body
    try{
        await Componente.create({
        nombre,descripcion
        })
        res.status(201).json({mensaje:'el componente fue agregado correctamente'})
    }catch{
    res.status(400).json('el servidor no puede procesar la solicitud')
    }
}
componenteController.addComponente = addComponente

const getComponentes = async (req, res) => {
    const componentes = await Componente.findAll()
    res.status(200).json(componentes)
}
componenteController.getComponentes = getComponentes

const getComponenteById = async (req, res) => {
    const id = req.params.id
    const componente = await Componente.findOne({
        where: { id },
        attributes: ['nombre', 'descripcion']
    })
    res.status(200).json(componente)
}
componenteController.getComponenteById= getComponenteById

const updateComponente = async (req, res) => {
    const { nombre, descripcion } = req.body
    const id = req.params.id
    await Componente.update({
        nombre, descripcion
    }, { where: { id } })
    res.status(200).json({mensaje:'el componente fue actualizado correctamente'})
}
componenteController.updateComponente = updateComponente

const deleteComponenteById = async (req, res) => {
    const id = req.params.id
    try{
        await Componente.destroy({ where: { id } })
        res.json({ mensaje: `el componente fue eliminado` })
    } catch{
    res.status(500).json({mensaje: `error al elimninar el componente`})
    } 
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