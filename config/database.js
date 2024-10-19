const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/producos.sqlite'
})

module.exports = sequelize