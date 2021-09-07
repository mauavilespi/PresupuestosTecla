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

    static typeUser = async(data) => {
        try {
            let tmpUser = [data.username, data.pass];
            let result = await modelUsers.loginUser(tmpUser);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido obtener el tipo de usuario');
        }
    };

    static generateToken = async(data, type) => {
        try {
            let tmpUsername = [data, type];
            let result = await modelLogin.newToken(tmpUsername);
            return result
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido generar el token')
        }
    };

};

module.exports = controllerLogin;
