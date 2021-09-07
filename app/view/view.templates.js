//! Templates for views
//! Import the necessary modules

//? Middlewares
const middlewareUsers = require('../../middleware/middleware.users');


module.exports = async (app) => {

    //! Login
    app.get('/', (req, res) => {
      res.render('index')
    });

    app.get('/PresupuestosTecla', middlewareUsers.isToken, (req, res) => {
      res.render('presupuesto', {usuario: "Pedro"})
    });
    
}