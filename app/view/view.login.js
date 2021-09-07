//! Import the necessary modules
//? Controller token
const controllerLogin = require('../controller/controller.login');

module.exports = async(app) => {
    //? LOGIN
    app.post('/login', async(req, res) => {
        let {username, pass} = req.body;
        if(!username || !pass) return res.status(400).send({error: 'Datos incompletos'});

        try {
            let result = await controllerLogin.typeUser(req.body);
            let token = await controllerLogin.generateToken(username, result)
            if (token === 0) return res.status(401).send({error: "Usted no es usuario de esta aplicación"})
            res.status(200).send({token: token, type: result});
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }
    })
}