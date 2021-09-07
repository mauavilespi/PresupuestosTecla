//! Import the necessary modules 
//? JWT
const jwt = require('jsonwebtoken');

//? Dotenc
require('dotenv').config();

class modelLogin{
    constructor(data) {
        this.data = data
    };

    static tokenAdmin = async() => {
        try {
            const result = jwt.verify(token, process.env.SECRET_KEY_admin);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('¡Usted no pertenece a los administradores!')
        }
    };

};

module.exports = modelLogin
