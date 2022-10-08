const { uploadAudio } = require("../services/audioService");
const { uploadImage } = require("../services/imageService");
const { uploadPdf } = require("../services/pdfService");

const subirImagen = async(imagen) => {
    let response = await uploadImage(imagen);


    //En caso que algo sale mal se retorna un bad request
    if(!response.ok){
        return res.status(400).json({
            ok: false,
            message: response.message
        })
    }

    return response.data;
}

const subirPdf = async(pdf) => {
    let response = await uploadPdf(pdf);

    //En caso que algo sale mal se retorna un bad request
    if(!response.ok){
        return res.status(400).json({
            ok: false,
            message: response.message
        })
    }

    return response.data;
}

const subirAudio = async(audio) => {
    let response = await uploadAudio(audio);


    //En caso que algo sale mal se retorna un bad request
    if(!response.ok){
        return res.status(400).json({
            ok: false,
            message: response.message
        })
    }

    return response.data;
}

module.exports = {
    subirImagen,
    subirPdf,
    subirAudio
}