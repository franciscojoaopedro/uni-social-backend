const Usuario = require('../models/usuario');
const usuarioDAO = require('../database/DAO/usuarioDAO');
const encriptarPassword = require('../infra/encriptarPassword/encriptar');

const verificarUsuario = async (res, usuario) => {
    const usuarioExiste = await usuarioDAO.buscarPorNProcesso(usuario);
    if (usuarioExiste) {
        return res
            .status(422)
            .json({ mensagem: 'Já existe uma conta pra esse usuario' });
    }
};

module.exports = {
    registrar: async (req, res) => {
        try {
            const { nprocesso, nome, email, password } = req.body;
            const usuario = new Usuario(nprocesso, nome, email, password);
            const passwordEncriptado = await encriptarPassword(password);
            usuario.validarCampos();
            usuario.ValidarEmail();
            verificarUsuario(res, usuario);
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
