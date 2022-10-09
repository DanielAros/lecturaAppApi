const path = require('path');
const fs = require('fs');

const { Cuento } = require('../models');

const { getAudioService } = require('../services/audioService');

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
    res.status(200).json('getPdf');
}

const getImg = async(req, res) => {
    res.status(200).json('getImg');
}

module.exports = {
    getAudio,
    getPdf,
    getImg
}