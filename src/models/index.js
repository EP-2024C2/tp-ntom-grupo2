const Producto = require('./Producto')
const Fabricante = require('./Fabricante')
const Componente = require('./Componente')


Producto.belongsToMany(Fabricante, {through:"Producto_Fabricante" })
Fabricante.belongsToMany(Producto, {through:"Producto_Fabricante" })

Producto.belongsToMany(Componente, {through:"Producto_Componente" })
Componente.belongsToMany(Producto, {through:"Producto_Componente" })

module.exports = {
    Producto,
    Fabricante,
    Componente
}