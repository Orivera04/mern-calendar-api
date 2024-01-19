const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post('/', loginUsuario);
router.post('/new', crearUsuario);
router.post('/renew', revalidarToken);


module.exports = router;