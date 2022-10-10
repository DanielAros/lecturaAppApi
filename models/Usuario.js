const Sequilize = require('sequelize');
const {db} = require('../config/database');

const Usuario = db.define('usuario', {
    idUsuario: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreUsuario: {type: Sequilize.STRING(32), allowNull: false},
    password: {type: Sequilize.STRING(32), allowNull: false},
    apellidosUsuario: {type: Sequilize.STRING(32), allowNull: false},
    correoElectronico: {type: Sequilize.STRING(32), allowNull: false},
});

module.exports = Usuario;