//! Import the necessary modules
//? Express Rate Limit
const rateLimit = require("express-rate-limit");

//? Limit the API
module.exports.limiter = rateLimit({
    windowMs: 300 * 60 * 1000, //* 300 minutes
    max: 1000, //* limit each IP to 1000 requests per windowMs
    message: 'Acaba de exceder los límites de la API'
});