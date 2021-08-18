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
const usersDB = require('./db/db.models.users');
const typeUserDB = require('./db/db.models.typeuser');

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
        await usersDB.sync({alter:true});
        await typeUserDB.sync({alter:true});
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