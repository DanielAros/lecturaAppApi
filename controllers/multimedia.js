const path = require('path');
const fs = require('fs');

const { getAudioService } = require('../services/audioService');
const { getImageService } = require('../services/imageService');
const { getPdfService } = require('../services/pdfService');

const getAudio = async(req, res) => {
    try{
        const { fileName } = req.params;
        const response = getAudioService(fileName);

        const filePath = response.data;
        const stat = fs.statSync(filePath);

        res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Content-Length': stat.size
        });

        const readStream = fs.createReadStream(filePath);

        readStream.pipe(res);
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'Internal server error'
        })
    }

}

const getPdf = async(req, res) => {
    // res.status(200).json('getPdf');
    try{
        const { fileName } = req.params;
        console.log(fileName);
        const response = await getPdfService(fileName);
        const filePath = response.data;

        res.sendFile(filePath, (err) => {
            if(err){
                res.status(400).json({
                    ok: false,
                    message: 'Archivo no encontrado'
                })
            }
        });

    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'Internal server error'
        })
    }
}

const getImg = async(req, res) => {
    try{
        const { fileName } = req.params;
        const response = await getImageService(fileName);

        const filePath = response.data;
        res.sendFile(filePath, (err) => {
            if(err){
                res.status(400).json({
                    ok: false,
                    message: 'Archivo no encontrado'
                })
            }
        });
    }catch(err){
        res.status(500).json({
            ok: false,
            message: 'Internal server error'
        })
    }
}

module.exports = {
    getAudio,
    getPdf,
    getImg
}