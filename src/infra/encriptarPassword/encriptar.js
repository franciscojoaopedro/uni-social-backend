const bcript = require('bcrypt');
const ErroInexperado = require('../../models/error/erro-inexperado');

module.exports = async function encriptarPassword(password) {
    try {
        const salt = await bcript.genSalt(12);
        return await bcript.hash(password, salt);
    } catch (error) {
        throw new ErroInexperado();
    }
};
