const { Router } = require('express');

const { getCuentos, getCuento, postCuento } = require('../controllers/cuentos');

const router = Router();

router.get('/', getCuentos);
router.get('/:idCuento', getCuento);
router.post('/', postCuento);

module.exports = router;