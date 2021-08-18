//! Import the necessary modules
//? DB model
const users = require('../../db/db.models.users');

module.exports.newUser = async(data) => {
    try {
        await users.create({username:data[0], pass:data[1], typeUser_id:data[2]})
        return true

    } catch (error) {
        console.log(error)
        throw new Error (error)

    }
}

module.exports.existUser = async(data) => {
    try {
        let result = await users.findOne({
            where: {username: `${data[0]}`, pass: `${data[1]}`}
        })
        if (result){
            return true
        } else {
            return false
        }
        
    } catch (error) {
        console.log(error);
        throw new Error (error);

    }
}

module.exports.typeUser = async (data) => {
    try {
        let result = await users.findOne({
            where: {
                username: data
            },
            attributes: ['typeUser_id']
            });
        return result;
    
    } catch (error) {
        console.log(error);
        throw new Error (error);
        
    }
}