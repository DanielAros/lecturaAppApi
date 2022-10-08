const { Router } = require('express');

const { cuentosGet, cuentosGetAudio, cuentosPost } = require('../controllers/cuentos');

const router = Router();

router.get('/', cuentosGet);
router.get('/:id', cuentosGetAudio);
router.post('/', cuentosPost);

module.exports = router;