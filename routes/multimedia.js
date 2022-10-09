const { Router } = require('express');

const { getAudio, getImg, getPdf } = require('../controllers/multimedia');

const router = Router();

router.get('/audio/:fileName', getAudio);
router.get('/pdf/:idCuento', getPdf);
router.get('/img/:idCuento', getImg);

module.exports = router;