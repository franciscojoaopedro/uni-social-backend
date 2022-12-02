const express = require('express');
const router = express.Router();

const usuarioController = require('./controller/usuarioControler');

router.post('/signup', usuarioController.registrar);

module.exports = router;
