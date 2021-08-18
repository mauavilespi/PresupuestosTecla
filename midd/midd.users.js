//! Import the necessary modules
//? User Services
const servicesUsers = require('../services/services.users');


//? Check if the user is Admin
module.exports.isAdmin = async(req, res, next) =>{
    try {
        if (req.headers.authorization != undefined){
            const token = req.headers.authorization.split(' ')[1]
            let verify = await servicesUsers.verifyTokenAdmin(token)
            if(verify){
                req.params.usuario = verify.data
                next()
            } else {
                res.status(401).json({message: "Usted no pertenece a los administradores"})
            }
        }else{
            res.status(400).json({message: "Este es un sistema seguro y requiere autorización"})
            throw new Error ('Este es un sistema seguro y requiere autorización')
        }
        
    } catch (error) {
        console.log(error);
        throw new Error (error)
        
    }
}