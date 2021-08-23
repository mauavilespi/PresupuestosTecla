//! Import the necessary modules
//? Express
const express = require('express');
const app = express();

//? Sequelize
const sequelize = require('./db/db.connection');

//? Dotenv
require('dotenv').config();

//? CORS
const cors = require('cors');

//? Routes
const templates = require('./app/view/view.templates');
const usersView = require('./app/view/view.users');

//? Models DB
//* Users
const usersDB = require('./db/db.models.users');
const typeUserDB = require('./db/db.models.typeuser');
//* Tables
const conceptosDB = require('./db/db.models.conceptos');
const costosDB = require('./db/db.models.costos');
const costosdirectosDB = require('./db/db.models.costosdirectos');
const estadosresultadosDB = require('./db/db.models.estadosresultados');
const flujosefectivoDB = require('./db/db.models.flujosefectivo');
const gastosadministrativosDB = require('./db/db.models.gastosadministrativos');
const ingresosDB = require('./db/db.models.ingresos');
const presupuestosDB = require('./db/db.models.presupuestos');
const recursosDB = require('./db/db.models.recursos');

//? Middlewares
const middleware = require('./midd/midd.global');

//? Body Parser
const bodyParser = require('body-parser');

//! Global configs for use of ejs
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')
app.set('views', __dirname + '/views')

//! Global middlewares
app.use(express.json());
app.use(cors());
app.use(middleware.limiter);
app.use(bodyParser.urlencoded({ extended: true }));

//! Server start
const startServer = async() => {
    try {

        //* Connection with database
        //* Users
        await usersDB.sync({alter:true});
        await typeUserDB.sync({alter:true});
        //*Tables
        await conceptosDB.sync({alter:true});
        await costosDB.sync({alter:true});
        await costosdirectosDB.sync({alter:true});
        await estadosresultadosDB.sync({alter:true});
        await flujosefectivoDB.sync({alter:true});
        await gastosadministrativosDB.sync({alter:true});
        await ingresosDB.sync({alter:true});
        await presupuestosDB.sync({alter:true});
        await recursosDB.sync({alter:true});
        await sequelize.authenticate();
        console.log('Conexión con la base de datos realizada correctamente');

        //* Start server
        app.listen(process.env.PORT, () => {
            console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        })

    } catch (error) {
        console.error('Ocurrió un error al intentar conectar el servidor: \n', error)
    }
}

//! Call startServer
startServer();
templates(app);
usersView(app);