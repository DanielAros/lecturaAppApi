const Usuario = require('../models/Usuario');
const { compare } = require('../helpers/handleBcrypt')

const postLogin = async (req, res) => {
    const { nombreUsuario, password } = req.body;

    const usuario = await Usuario.findOne({where: {nombreUsuario}});

    if(!usuario){
        return res.status(200).json({ok: false, code: 200, message: "Usuario no encontrado"});
    }else{
        const checkPassword = await compare(password, usuario.password);
        if(checkPassword){
            return res.status(200).json({ok: true, code: 200, message: usuario});
        }else{
            return res.status(200).json({ok: false, code: 501, message: "Constraseña equivocada"});
        }
    }
    
    
}

module.exports = {
    postLogin
}