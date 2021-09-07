//! Import the necessary modules 
//? JWT
const jwt = require('jsonwebtoken');

//? Dotenc
require('dotenv').config();

class modelLogin{
    constructor(data) {
        this.data = data
    };

    static tokenAdmin = async(token) => {
        try {
            const result = jwt.verify(token, process.env.SECRET_KEY_admin);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('¡Usted no pertenece a los administradores!')
        }
    };

    static newToken = async(data) => {
        try {
            //? ADMIN (1)
            if(data[1] === 1) return jwt.sign({data}, ''+process.env.SECRET_KEY_admin)
            //? NORMAL (2)
            if(data[1] === 2) return jwt.sign({data}, ''+process.env.SECRET_KEY_normal)
            return 0
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido generar el Token')
        }
    };

};

module.exports = modelLogin
