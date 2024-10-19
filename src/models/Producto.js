const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Producto extends Model {}

Producto.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    pathImg: {
        type: DataTypes.STRING,
    }},{sequelize,modelName:'producto'}
)

module.exports = Producto