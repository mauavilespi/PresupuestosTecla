//! Import the necessary modules
//? JWT
const jwt = require('jsonwebtoken');

//! User Services
//* Token Generator
module.exports.tokenGenerator = async (data, type) => {
    let result;
    if (type === 1){
        result = jwt.sign({data}, ''+process.env.SECRET_KEY_admin) 
    } else {
        result = jwt.sign({data}, ''+process.env.SECRET_KEY_normal)
    }
    return result
}

//* Verify admin
module.exports.verifyTokenAdmin = async(token) => {
    try {
        const resultado = jwt.verify(token, process.env.SECRET_KEY_admin);
        return resultado;
    
    } catch (error) {
        console.log(error);
        throw new Error ('¡Usted no pertenece a los administradores!')
    }
}