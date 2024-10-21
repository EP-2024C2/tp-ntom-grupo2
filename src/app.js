require('dotenv').config();
const express = require('express');
const routes = require('./routes/index');
const sequelize = require('../config/database');
const initialProductoFabricanteComponente = require('./seeders/initialSeeders');
const app = express();

app.use(express.json());
app.use(routes);

async function startDatabase() {
    try {
        await sequelize.sync({ force: true });
        console.log('Base de datos sincronizada');

        await initialProductoFabricanteComponente();
        console.log('Datos de inicialización cargados correctamente');
    } catch (error) {
        console.log('Error al sincronizar o inicializar los datos', error);
    }
}

startDatabase();

const port = process.env.PORT || 3008;
app.listen(port, () => {
    console.log(`Ejecutando servidor en puerto ${port}`);
});