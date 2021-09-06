//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//*typeUser model
const typeUser = require('./db.models.typeuser');

//? users Model
const users = sequelize.define('users', {
    
    username: {type: DataTypes.STRING(20), allowNull: false},
    
    pass: {type: DataTypes.STRING(20), allowNull: false},
    
    //* Type of user (admin (1) or normal(2))
    typeUser_id: {
        type: DataTypes.INTEGER,
        references: {
            model: typeUser,
            key: 'id'
        },
        allowNull: false
    },
    
    active: {type: DataTypes.INTEGER, allowNull: false}

},{
    //* Timestamps
    timestamps: true
});

//? export module
module.exports = users;
