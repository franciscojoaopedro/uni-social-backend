const jwt = require('jsonwebtoken');

module.exports = async function criarToken({ nprocesso }) {
    return await jwt.sign(nprocesso, 'secret');
};
