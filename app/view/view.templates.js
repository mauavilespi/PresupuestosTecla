module.exports = async (app) => {
    //! Login
    app.get('/', (req, res) => {
      res.render('login')
    });

    app.get('/PresupuestosTecla', (req, res) => {
      res.render('presupuesto', {usuario: "Pedro"})
    });
}