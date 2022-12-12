const path = require('path');
const fs = require('path');
const {v4: uuidv4} = require('uuid');


 /**
  * Funcion para guardar el pdf en el servidor
  * @param file arvhivo que se va almacenar localmente.
  * @returns Devuelve una respuesta {ok,message, data:Url del imagen} con el resultado de la operación.
*/
const uploadPdf = async(file) => {

    //Se valida que existe el archivo a subir
    if(!file){
        return {
            ok: false,
            message: "No se encontro un archivo para subir pdf",
            data: null
        }
    }

    //validar extension
    const segmentoArchivo = file.name.split('.'); //Divide el nombre del archivo cada vez que encuentre un .
    const extensionArchivo = segmentoArchivo[segmentoArchivo.length - 1];

    const extensionesPermitidas = ['pdf'];

    //Valida se la extension del archivo a guardar sea de tipo imagen
    if(!extensionesPermitidas.includes(extensionArchivo)){
        return {
            ok: false,
            message: "El tipo de archivo no es permitido, solo se permite formato pdf.",
            data: null
        }
    }

    //Se genera el nombre del archivo
    const nombreArchivo = `${uuidv4()}.${extensionArchivo}`;
    //Path donde se guardara el audio
    const path = `uploads/pdf/${nombreArchivo}`;

    try{
        await file.mv(path); //Se mueve la imagen a la carpeta especificada


        //Se devuelve la ruta donde se guardo la imagen
        return {
            ok: true,
            message: "El pdf se guardo correctamente",
            data: path
        }
    }catch(err){
        console.log(err);
        return {
            ok: false,
            message: "Ocurrio un error al subir el pdf.",
            data: null
        }
    }
}

//Funcion para obtener el pdf guardado en el servidor
const getPdfService = (fileName) => {
    const pathPdf = path.join(__dirname, `../uploads/pdf/${fileName}`);

    return {
        ok: true,
        message: null,
        data: pathPdf
    }
}

module.exports = {
    uploadPdf,
    getPdfService
}