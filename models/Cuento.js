const Sequilize = require('sequelize');
const { db } = require('../config/database');

const Cuento = db.define('cuento', {
    cuentoId: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {type: Sequilize.STRING(60), allowNull: false}
})