const Sequilize = require('sequelize');
const { db } = require('../config/database');

const Cuento = db.define('cuento', {
    idCuento: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tituloCuento: {type: Sequilize.STRING(32), allowNull: false},
    autorCuento: {type: Sequilize.STRING(36), allowNull: false},
    fechaArchivoCreado: {type: Sequilize.DATEONLY(64), defaultValue: Sequilize.NOW},
    imagenCuento: {type: Sequilize.STRING(64), allowNull: false},
    pdfCuento: {type: Sequilize.STRING(64), allowNull: false},
    audioCuento: {type: Sequilize.STRING(64), allowNull: false}
})

module.exports = Cuento;