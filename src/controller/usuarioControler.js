const Usuario = require('../models/usuario');
const usuarioDAO = require('../database/DAO/usuarioDAO');

module.exports = {
    registrar: async (req, res) => {
        // Esse codigo é só pra simulação de como vai ser arquitetura do projeto
        const { nprocesso, nome, email, password } = req.body;
        const usuario = new Usuario(nprocesso, nome, email, password);
        // if (usuario.verificarEmail()) {
        //     return res.status(500).json({ message: 'Email invalido' });
        // }
        const id = await usuarioDAO.inserir(usuario);
        if (id) {
            return res.status(200).json({ id });
        }
        return res.status(500);
    },
};
