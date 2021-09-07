//! Import the necessary modules
//? DB model
const users = require('../../db/db.models.users');

//? BCRYPT
const bcrypt = require('bcrypt');

class modelUsers {
    constructor(data) {
        this.data = data  
    };

    static verifyUser = async(user) => {
        try {
            let result = await users.findOne({where: {username: user}});
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia del usuario')
        }
    };

    static newUser = async(data) => {
        try {
            //* Encrypt password
            data[1] = await bcrypt.hash(data[1], 10);

            let resultado = await users.create({username:data[0], pass:data[1], typeUser_id:data[2], active:data[3]})
            return resultado;
    
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido crear el usuario');
    
        }
    };

    static getUsers = async() => {
        try {
            let result = await users.findAll({
                where: {
                    active: 1
                },
                attributes: ['id','username','createdAt','updatedAt','typeUser_id']
            });
            return result;
    
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido listar a los usuarios');
        }
    };

    static updatePassUser = async(data) => {
        try {
            let result = await users.findOne({
                where: {
                    username: data[0]
                }, attributes: ['pass']
            });
            if(!result) return 0;

            //* Verify password
            const passOK = await bcrypt.compare(data[1], result.dataValues.pass)
            if(passOK){
                //* Encrypt new password
                data[2] = await bcrypt.hash(data[2], 10);
                let resultado = await users.update({pass: data[2]},{where:{username: data[0]}});
                return resultado
            }
            else return 0;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido encontrar al usuario');
        }

    };

    static deleteUser = async(data) => {
        try {
            let result = await users.update({active: 0},{
                where: {
                    username: data
                }
            });
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido elminar al usuario');
        }
    };

    static loginUser = async(data) => {
        try {
            let result = await users.findOne({
                where: {
                    username: data[0]
                },
                attributes: ['pass', 'typeUser_id']
            });
            if(!result) return 0

            //* Verify password
            const passOK = await bcrypt.compare(data[1], result.dataValues.pass);
            if(passOK) return result.dataValues.typeUser_id

        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido encontrar al usuario');
        }
    }

};

module.exports = modelUsers;
