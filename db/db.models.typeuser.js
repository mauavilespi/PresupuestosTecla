//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? typeUser model
const typeUser = sequelize.define('typeUser', {
    
    type: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
},{
    //* Desactivate timestamps
    timestamps: false
});

//? Export module
module.exports = typeUser;