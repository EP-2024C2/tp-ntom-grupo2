const express = require('express')
const routes  = require('./routes/index')
const sequelize = require('../config/database')
//const initialAutoresLibros = require('./seeders/initialSeeder')

const app = express()

app.use(express.json())

app.use(routes)

sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.log('Error al sincronizar la base de datos', err));


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Ejecutando servidor en puerto ${PORT}`)
})