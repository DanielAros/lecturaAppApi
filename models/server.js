const express = require('express');
const cors = require('cors');
const {db} = require('../config/database');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            cuentos: '/api/cuentos'
        }

        //Conectar a la base de datos
        this.conectarDB();

        this.middlewares();

        //Rutas de la aplicación
        this.routes();
    }

    conectarDB(){
        db.sync().then(() => console.log('Conectado a la base de datos')).catch(err => console.log(err));
        require('./index')
    }

    middlewares(){

        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.cuentos, require('../routes/cuentos'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port || 3000);
        })
    }
}

module.exports = Server;