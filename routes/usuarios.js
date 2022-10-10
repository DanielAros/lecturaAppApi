const { Router } = require('express');

const { getUsuario, getUsuarios, postUsuario } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);
router.get('/:idUsuario', getUsuario);
router.post('/', postUsuario);

module.exports = router;