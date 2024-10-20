const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/productos.sqlite'
})

module.exports = sequelize