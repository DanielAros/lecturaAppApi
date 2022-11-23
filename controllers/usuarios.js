const Usuario = require('../models/Usuario');


var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const getUsuarios = async (req, res) => {
    // const query = await db.query("SELECT * FROM usuarios");
    const query = await Usuario.findAll();

    return res.status(200).json({code: 200, message: query});
}

const getUsuario = async (req, res) => {
    const { idUsuario } = req.params;

    const query = await Usuario.findOne({where: {idUsuario}});

    return res.status(200).json({code: 200, message: query});
}

const postUsuario = async (req, res) => {
    try{
        const data = req.body;
        if (data.nombreUsuario && data.password && data.apellidosUsuario && data.correoElectronico){
            console.log(data);
            if(data.correoElectronico.match(mailformat)){
                const usuario = await Usuario.create(data);

                return res.status(200).json({
                    ok: true,
                    message: "Usuario almacenado correctamente",
                    data: usuario
                });
            }else{
                return res.status(200).json({
                    ok: false,
                    message: 'Correo electronico mal escrito'
                });
            }
        }

        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });

    }catch(err){
        return res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
}

module.exports = {
    getUsuario, 
    getUsuarios,
    postUsuario
}