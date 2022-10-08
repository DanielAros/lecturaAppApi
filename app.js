require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen();

// const express = require('express');
// const cors = require('cors');
// const { db } = require('./config/database');

// const app = express();
// let paths = {
//     cuentos: '/api/cuentos'
// }

// db.sync().then(() => console.log('Conectado a la base de datos')).catch((err) => console.log(err));
// require('./models/index');

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));

// app.use(paths.cuentos, require('./routes/cuentos'));

// app.listen(8000, () => {
//     console.log('Servidor corriendo en el puerto: 8000');
// })