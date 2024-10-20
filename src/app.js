const express = require('express')
const routes  = require('./routes/index')
const sequelize = require('../config/database')
const initialProductoFabricanteComponente= require('./seeders/initialSeeders')
const app = express()

app.use(express.json())

app.use(routes)

async function startDatabase(){
    try {
        await sequelize.sync({force: true})
        console.log('Base de datos sincronizada')

        await initialProductoFabricanteComponente()
        console.log('Datos de inicialización cargados correctamente')
    } catch (error) {
        console.log('Error al sicronizar o inicializar los datos')
    }
} 

startDatabase()

/*
sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.log('Error al sincronizar la base de datos', err));
*/

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Ejecutando servidor en puerto ${PORT}`)
})