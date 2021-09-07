//! Import the necessary modules
//? Model Login
const modelLogin = require('../model/model.login');
//? Model Users
const modelUsers = require('../model/model.users');

class controllerLogin{
    constructor(data) {
        this.data = data
    };

    static verifyTokenAdmin = async(token) => {
        try {
            let resultado = await modelLogin.tokenAdmin(token);
            return resultado;
        } catch (error) {
            console.log(error);
            throw new Error ('¡Usted no pertenece a los administradores!')
        }
    };



};

module.exports = controllerLogin;
