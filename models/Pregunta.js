const Sequilize = require('sequelize');
const { db } = require('../config/database');
const Cuento = require('./Cuento');

const Pregunta = db.define('pregunta', {
    idPregunta: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pregunta: {type: Sequilize.STRING(100), allowNull: false},
    respuesta1: {type: Sequilize.STRING(100), allowNull: false},
    respuesta2: {type: Sequilize.STRING(100), allowNull: false},
    respuesta3: {type: Sequilize.STRING(100), allowNull: false},
    respuestaCorrecta: {type: Sequilize.STRING(200), allowNull: false},
})

Pregunta.belongsTo(Cuento, {
    foreignKey: {
        name: 'idCuento',
        allowNull: false
    }
});

module.exports = Pregunta;