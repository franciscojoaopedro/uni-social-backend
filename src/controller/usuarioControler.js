const Usuario = require('../models/usuario');
const usuarioDAO = require('../database/DAO/usuarioDAO');
const encriptarPassword = require('../infra/encriptaPassword/encriptaPassword');
const criarToken = require('../infra/criaToken/cria-token');

module.exports = {
    registrar: async (req, res) => {
        try {
            const { nprocesso, nome, email, password } = req.body;
            const usuario = new Usuario(nprocesso, nome, email, password);
            const passwordEncriptado = await encriptarPassword(password);
            usuario.validarCampos();
            usuario.ValidarEmail();
            const usuarioExiste = await usuarioDAO.buscarPorNProcesso(usuario);
            usuario.verificarUsuarioSeExiste(usuarioExiste);
            await usuarioDAO.inserir({
                ...usuario,
                password: passwordEncriptado,
            });
            const token = await criarToken(usuario);
            return res.status(201).json({ tokenDeAcesso: token });
        } catch (error) {
            return res
                .status(error.statusCode)
                .json({ mensagem: error.message });
        }
    },
};
