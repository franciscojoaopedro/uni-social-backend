const Usuario = require('../models/usuario');
const usuarioDAO = require('../database/DAO/usuarioDAO');
const encriptarPassword = require('../infra/encriptarPassword/encriptar');

module.exports = {
    registrar: async (req, res) => {
        try {
            const { nprocesso, nome, email, password } = req.body;
            const usuario = new Usuario(nprocesso, nome, email, password);
            usuario.validarCampos();
            usuario.ValidarEmail();
            const passwordEncriptado = await encriptarPassword(password);
            await usuarioDAO.inserir({
                ...usuario,
                password: passwordEncriptado,
            });
        } catch (error) {
            return res
                .status(error.statusCode)
                .json({ mensagem: error.message });
        }
    },
};
