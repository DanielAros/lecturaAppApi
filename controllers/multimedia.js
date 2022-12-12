const path = require('path');
const fs = require('fs');
const pdf = require('pdf-parse');

// const {PdfReader} = require('pdfreader');

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

        // res.sendFile(filePath, (err) => {
        //     if(err){
        //         res.status(400).json({
        //             ok: false,
        //             message: 'Archivo no encontrado'
        //         })
        //     }
        // });
        // new PdfReader().parseFileItems(filePath , (err, item) => {
        //     if (err){ 
        //         console.error("error:", err);
        //     }else if (!item) {
        //         console.warn("end of file");
        //     }
        //     else if (item.text) {
        //         console.log(item.text);
        //         res.status(200).json({
        //             message: item.text
        //         })
        //     }
        // });

        const dataBuffer = fs.readFileSync(filePath);
 
        pdf(dataBuffer).then(function(data) {
        
            // number of pages
            console.log(data.numpages);
            // number of rendered pages
            console.log(data.numrender);
            // PDF info
            console.log(data.info);
            // PDF metadata
            console.log(data.metadata); 
            // PDF.js version
            // check https://mozilla.github.io/pdf.js/getting_started/
            console.log(data.version);
            // PDF text
            console.log(data.text); 
            res.status(200).json({
                message: data.text
            });
                
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