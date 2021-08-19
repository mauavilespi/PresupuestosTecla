//? Model users
const modelUsers = require('../model/model.users')

//* users Creator
module.exports.userCreator = async (user) => {
    let newUsr = [
        user.username,
        user.pass,
        user.typeUser_id,
        user.active
    ];
    try {
        let sameUser = await modelUsers.sameUser(newUsr[0]);
        if(!sameUser){

            let result = await modelUsers.newUser(newUsr);
            if (result) {
                return 'Se ha creado el usuario correctamente'
            } else {
                throw new Error ('Error en la creación de usuario')
            }
        } else {
            return  `El usuario ${newUsr[0]} ya existe`
        }

    } catch (error) {
        console.log(error)
        throw new Error ('No se ha podido crear el usuario')
        
    }
}

//* verify Valid User
module.exports.verifyValidUser = async (user) => {
    let usrTMP = [
        user.user,
        user.pass
    ];
    try {
        let result = await modelUsers.existUser(usrTMP);
        if(result){
            return result
        } else {
            throw new Error ('No se ha encontrado al usuario')
        }
        
    } catch (error) {
        console.log(error);
        throw new Error ('No se ha encontrado al usuario');        
    }
}

//* Verify Type of User (admin or normal)
module.exports.typeOfUser = async(user) => {
    let usrTMP = user.user;
    try {
        let type = await modelUsers.typeUser(usrTMP);
        return type.dataValues.typeUser_id;
        
    } catch (error) {
        console.log(error)
        throw new Error ('Ocurrió un error inesperado')
        
    }
}

//* Delete User (change "active" to 0)
module.exports.userDelete = async(data) => {
    try {
        let result = await modelUsers.delUser(data);
        if(result){
            return `El usuario con id ${data} se ha eliminado correctamente`
        } else {
            throw new Error ('Error en la eliminación del usuario')
        }
        
    } catch (error) {
        console.log(error);
        throw new Error ('Ocurrió un error inesperado')
        
    }
}