//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? presupuestos Model
const presupuestos = require('./db.models.presupuestos');

//? flujosefectivo model
const flujosefectivo = sequelize.define('flujosefectivo', {

    concepto: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    mes1: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes2: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes3: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes4: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes5: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes6: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes7: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes8: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes9: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes10: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes11: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    mes12: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    //* presupuestos
    presupuestos_id: {
        type: DataTypes.INTEGER,
        references: {
            model: presupuestos,
            key: 'id'
        },
        allowNull: false
    },

    active: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
},{
    //* Desactivate timestamps
    timestamps: true
});

//? Export module
module.exports = flujosefectivo;