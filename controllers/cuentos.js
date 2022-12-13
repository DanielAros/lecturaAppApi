const path = require('path');
const fs = require('fs');
const util = require('util');

const { Cuento, Pregunta } = require('../models');
const {subirImagen, subirPdf, subirAudio} = require('../helpers/subirArchivos')

//Obtiene y devuelve todos los cuentos de la base de datos.
const getCuentos = async(req, res) => {
    try{
        const cuento = await Cuento.findAll();

        res.status(200).json({
            ok: true,
            data: cuento
        })
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'Internal Server error'
        })
    }
}


//obtiene los datos de un cuento
const getCuento = async(req, res) => {
    const {idCuento} = req.params;
    console.log('AQUI');
    const cuento = await Cuento.findOne({where: {idCuento}});

    res.json({
        cuento
    })
}

const cuentosGetAudio = async(req, res) => {
    const { cuentoId } = req.params;

    const cuento = await Cuento.findOne({where: {cuentoId: id}});

    console.log(cuento);


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
const postCuento = async(req, res) => {
    try{
        const data = req.body;

        data.imagenCuento = await subirImagen(req.files?.imagenCuento);
        data.pdfCuento = await subirPdf(req.files?.pdfCuento);
        data.audioCuento = await subirAudio(req.files?.audioCuento);

        const cuento = await Cuento.create(data);

        return res.status(200).json({
            ok: true,
            message: "Cuento almacenado correctamente",
            data: cuento
        });
    }catch(err){
        console.log(err)
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

module.exports = {
    getCuentos,
    getCuento,
    postCuento,
}