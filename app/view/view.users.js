//! Import the necessary modules
//? Controller users
const controllerUsers = require('../controller/controller.users');

//? Middlewares
const middlewareUsers = require('../../middleware/middleware.users');

module.exports = async(app) => {
    //? Create new User
    app.post('/user/new', async(req, res) => {
        let {username, pass, typeUser_id, active} = req.body
        if(!username || !pass || !typeUser_id || !active) return res.status(400).send({error: 'Datos incompletos'})

        try {
            let verify = await controllerUsers.userExists(username);
            if(verify) return res.status(400).send({error: `Usuario ${username} ya registrado`})

            let result = await controllerUsers.userCreate(req.body);
            res.status(200).json({status: result})
            
        } catch (error) {
            console.log(error)
            res.status(400).json('Ocurrió un error inesperado')
        }
      
    });

    //? GET all users
    app.get('/user', middlewareUsers.isAdmin, async(req, res) => {
        try {
            let result = await controllerUsers.userGet();
            if(result) return res.status(200).send(result)
            res.status(400).send({error: 'No se han encontrado usuarios'})
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'No se ha podido listar a los usuarios'})
        }
      
    });

    //? UPDATE password user
    app.put('/user/update/password', async(req, res) => {
        let {username, oldpass, newpass} = req.body;
        if(!username || !oldpass || !newpass) return res.status(400).send({error: 'Datos incompletos'});

        try {
            let verifyUsername = await controllerUsers.userExists(username);
            if(!verifyUsername) return res.status(400).send({error: 'No se puede modificar un usuario que no existe'});

            let result = await controllerUsers.userUpdatePassword(req.body);
            res.status(200).send({status: result});
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'})
        }
    });

    //? DELETE user
    app.delete('/user/delete/:username', middlewareUsers.isAdmin, async(req, res) => {
        let userParams = req.params.username;
        try {
            let verifyUsername = await controllerUsers.userExists(userParams);
            if(!verifyUsername) return res.status(400).send({error: 'No se puede eliminar un usuario que no existe'});

            let result = await controllerUsers.userDelete(userParams);
            res.status(200).send({status: result});
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'})
        }
    });
}

/*
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
    */