const Usuario = require('../models/usuario');
const usuarioDAO = require('../database/DAO/usuarioDAO');

module.exports = {
    registrar: async (req, res) => {
        try {
            const { nprocesso, nome, email, password } = req.body;
            const usuario = new Usuario(nprocesso, nome, email, password);
            usuario.validarCampos();
            await usuarioDAO.inserir(usuario);
            return res.status(500);
        } catch (error) {
            return res
                .status(error.statusCode)
                .json({ messagem: error.message });
        }
    },
};
