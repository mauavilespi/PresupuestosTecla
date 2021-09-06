//! Templates for views

module.exports = async (app) => {

    //! Login
    app.get('/', (req, res) => {
      res.render('index')
    });

    app.get('/PresupuestosTecla', (req, res) => {
      res.render('presupuesto', {usuario: "Pedro"})
    });
    
}