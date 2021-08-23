//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? presupuestos model
const presupuestos = require('./db.models.presupuestos');

//? conceptos model
const conceptos = require('./db.models.conceptos');

//? gastosadministrativos model
const gastosadministrativos = sequelize.define('gastosadministrativos', {

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
    
    //* conceptos
    conceptos_id: {
        type: DataTypes.INTEGER,
        references: {
            model: conceptos,
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
module.exports = gastosadministrativos;