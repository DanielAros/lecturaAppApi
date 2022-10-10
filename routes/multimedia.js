const { Router } = require('express');

const { getAudio, getImg, getPdf } = require('../controllers/multimedia');

const router = Router();

router.get('/audio/:fileName', getAudio);
router.get('/pdf/:fileName', getPdf);
router.get('/img/:fileName', getImg);

module.exports = router;