
const getUsuarios = (req, res) => {
    res.json('get para obtener todos los usuarios');
}

const getUsuario = (req, res) => {
    res.json('get para obtener solo un usuario especificado');
}

const postUsuario = (req, res) => {
    res.json('post para registrar a un usuario');
}

module.exports = {
    getUsuario, 
    getUsuarios,
    postUsuario
}