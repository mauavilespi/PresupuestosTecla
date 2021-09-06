//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? conceptos model
const conceptos = sequelize.define('conceptos', {
    
    nameConcepto: {type: DataTypes.STRING(30), allowNull: false},

    active: {type: DataTypes.INTEGER, allowNull: false}
    
},{
    //* Desactivate timestamps
    timestamps: true
});

//? Export module
module.exports = conceptos;
