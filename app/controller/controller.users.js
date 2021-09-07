//! Import the necessary modules
//? Model users
const modelUsers = require('../model/model.users')

class controllerUsers {
    constructor(data) {
        this.data = data
    };

    //* exists the user?
    static userExists = async (username) => {
        let tmpUser = username;
        try {
            let result = await modelUsers.verifyUser(tmpUser);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia del usuario');
        }
    };

    //* users Creator
    static userCreate = async(data) => {
        let newUser = [data.username, data.pass, data.typeUser_id, data.active];
        try {
            let result = await modelUsers.newUser(newUser);
            if (result) return 'Se ha creado el usuario correctamente'
            else return 'Error en la creación de usuario'
        } catch (error) {
            console.log(error)
            throw new Error ('No se ha podido crear el usuario')
        }
    };

    //* user GET
    static userGet = async () => {
        try {
            let result = await modelUsers.getUsers();
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido realizar la petición')
            
        }
    };

    //* user Update Password
    static userUpdatePassword = async(data) => {
        let updatePass = [data.username, data.oldpass, data.newpass];
        try {
            let result = await modelUsers.updatePassUser(updatePass);
            if(result) return 'Se ha actualizado la contraseña correctamente'
            else return 'Error en la actualización de usuario'
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido actualizar la contraseña del usuario');
        }
    };

    //* user Delete
    static userDelete = async(user) => {
        try {
            let result = await modelUsers.deleteUser(user);
            if (result) return `El usuario ${user} ha sido eliminado`
            else return 'Error en la eliminación de usuario'
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido eliminar al usuario');
        }

    };

};

module.exports = controllerUsers;
