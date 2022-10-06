const { Router } = require('express');

const { cuentosGet } = require('../controllers/cuentos');

const router = Router();

router.get('/', cuentosGet);

module.exports = router;