const path = require('path');
const fs = require('fs');
const util = require('util');

const { Cuento, Pregunta } = require('../models');

const postPregunta = async(req, res) => {
    try{
        const data = req.body;
        const {tituloCuento} = data
        const cuento = await Cuento.findOne({where:{tituloCuento}});
        console.log(cuento.dataValues.idCuento)
        delete data.tituloCuento;
        data.idCuento = cuento.dataValues.idCuento;

        const pregunta = await Pregunta.create(data);

        return res.status(200).json({
            ok: true,
            message: "Pregunta guardada correctamente",
            data: pregunta
        });
    }catch(err){
        console.log(err)
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

const getPreguntas = async(req, res) => {
    try{
        const {idCuento} = req.params;
        console.log(idCuento)
        const cuento = await Cuento.findOne({where:{idCuento: idCuento}});
        const pregunta = await Pregunta.findAll({where:{idCuento: cuento.idCuento}});
        // console.log(cuento.dataValues.idCuento)
        // const preguntas = Pregunta.findAll({where: {idCuento: 6}});

        return res.status(200).json({
            ok: true,
            message: "Obtener preguntas",
            data: pregunta
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
    postPregunta,
    getPreguntas
}