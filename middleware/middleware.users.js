//! Import the necessary modules

//? Controller Login
const controllerLogin = require('../app/controller/controller.login');

//? Check if the user is Admin
module.exports.isAdmin = async(req, res, next) =>{
    try {
        if (req.headers.authorization != undefined){
            const token = req.headers.authorization.split(' ')[1]
            let verify = await controllerLogin.verifyTokenAdmin(token)
            if(verify){
                req.params.usuario = verify.data
                return next()
            } else {
                res.status(401).send({message: "Usted no pertenece a los administradores"})
            }
        }else{
            res.status(400).send({message: "Este es un sistema seguro y requiere autorización"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(401).send({message: "Usted no puede realizar esto porque no pertenece a los administradores"})
    }
};

//? Check if exits token
module.exports.isToken = async(req, res, next) => {
    try {
        if (req.headers.authorization != undefined){
            const token = req.headers.authorization.split(' ')[1]
            let verify = await controllerLogin.verifyToken(token)
            if(verify){
                req.params.usuario = verify.data
                return next()
            } else {
                res.status(401).send({message: "Su token no es aceptado."})
            }
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({message: "Este es un sistema seguro y requiere autorización"})
    }
}