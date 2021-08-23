//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//* users model
const users = require('./db.models.users');

//? presupuestos Model
const presupuestos = sequelize.define('presupuestos', {
    
    namepresupuesto: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    
    version: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    
    //* user
    users_id: {
        type: DataTypes.INTEGER,
        references: {
            model: users,
            key: 'id'
        },
        allowNull: false
    },

    active: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},{
    //* Timestamps
    timestamps: true
});

//? export module
module.exports = presupuestos;