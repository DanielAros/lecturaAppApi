const { Router } = require('express');

const { cuentosGet, cuentosGetAudio } = require('../controllers/cuentos');

const router = Router();

router.get('/', cuentosGet);
router.get('/:id', cuentosGetAudio);

module.exports = router;