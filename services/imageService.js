const path = require('path');
const fs = require('path');
const {v4: uuidv4} = require('uuid');


 /**
  * Funcion para guardar la imagen en el servidor
  * @param file arvhivo que se va almacenar localmente.
  * @returns Devuelve una respuesta {ok,message, data:Url del imagen} con el resultado de la operación.
*/
const uploadImage = async(file) => {

    //Se valida que existe el archivo a subir
    if(!file){
        return {
            ok: false,
            message: "No se encontro un archivo para subir image",
            data: null
        }
    }

    //validar extension
    const segmentoArchivo = file.name.split('.'); //Divide el nombre del archivo cada vez que encuentre un .
    const extensionArchivo = segmentoArchivo[segmentoArchivo.length - 1];

    const extensionesPermitidas = ['png', 'jpg', 'jpeg'];

    //Valida se la extension del archivo a guardar sea de tipo imagen
    if(!extensionesPermitidas.includes(extensionArchivo)){
        return {
            ok: false,
            message: "El tipo de archivo no es permitido, solo se permiten imagenes.",
            data: null
        }
    }

    //Se genera el nombre del archivo
    const nombreArchivo = `${uuidv4()}.${extensionArchivo}`;
    //Path donde se guardara la imagen
    const path = `uploads/img/${nombreArchivo}`;

    try{
        await file.mv(path); //Se mueve la imagen a la carpeta especificada


        //Se devuelve la ruta donde se guardo la imagen
        return {
            ok: true,
            message: "La imagen se guardo correctamente",
            data: path
        }
    }catch(err){
        console.log(err);
        return {
            ok: false,
            message: "Ocurrio un error al subir la imagen.",
            data: null
        }
    }
}

//Funcion para obtener una imagen guardada en el servidor
const getImage = (fileName) => {
    const pathImage = path.join(__dirname, `../uploads/img/${fileName}`);

    return {
        ok: true,
        message: null,
        data: pathImage
    }
}


module.exports = {
    uploadImage,
    getImage
}