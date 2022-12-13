const { Router } = require('express');

const {getPreguntas, postPregunta} = require('../controllers/pregunta');

const router = Router();

router.get('/:idCuento', getPreguntas);
router.post('/', postPregunta);

module.exports = router;

