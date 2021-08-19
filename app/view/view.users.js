//! Import the necessary modules
//? Controller users
const controllerUsers = require('../controller/controller.users');

//? Services users
const servicesUsers = require('../../services/services.users');

//? Middlewares
const midd = require('../../midd/midd.users');

module.exports = async(app) => {
    //* GET all users
    app.get('/users', (req, res) => {
      
    });

    //* Login
    app.post('/login', async(req, res) => {
        let user = req.body;
        try {
            let result = await controllerUsers.verifyValidUser(user);
            if (result) {
                
                //? Know if the user is admin or normal
                let type = await controllerUsers.typeOfUser(user);
                let token = await servicesUsers.tokenGenerator(user, type);
                res.json({"Token":token});
            }
        } catch (error) {
            console.log(error)
            res.status(400).send('Datos erróneos. Por favor, inténtelo otra vez.')
            
        }

    });

    //* POST new user
    app.post('/newUser', midd.isAdmin, async(req, res) => {
        let usuarioData = req.body;
        try {
            let result = await controllerUsers.userCreator(usuarioData);
            res.status(200).json({"status": result})
            
        } catch (error) {
            console.log(error)
            res.status(400).json('Ocurrió un error inesperado')
            
        }
      
    });

    //* DELETE user (change 'active' to 0)
    app.delete('/deleteUser/:id', midd.isAdmin, async(req,res) => {
        let idUser = req.params.id;
        console.log(idUser);
        try {
            let result = await controllerUsers.userDelete(idUser);
            res.status(200).json({"status": result})
            
        } catch (error) {
            console.log(error);
            res.status(400).json('Ocurrió un error inesperado');

            
        }
    });
}