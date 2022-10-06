const Sequilize = require('sequelize');

const db = new Sequilize('app_lectura', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 100000
    }
});

module.exports = {
    db
};