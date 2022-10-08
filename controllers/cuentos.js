const path = require('path');
const fs = require('fs');
const util = require('util');

//Obtiene y devuelve todos los cuentos de la base de datos.
const cuentosGet = (req, res) => {
    res.json('Get Usuarios');
}

const cuentosGetAudio = (req, res) => {
    const filePath = path.join(__dirname, '../uploads/audio/demons.mp3');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(res);
}


//Registro de un cuento
const cuentosPost = (req, res) => {
    // console.log(req);
    res.json({
        msg: req.body
    })
}

module.exports = {
    cuentosGet,
    cuentosGetAudio,
    cuentosPost
}