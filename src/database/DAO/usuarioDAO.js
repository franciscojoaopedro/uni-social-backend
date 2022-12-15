const connection = require('./connection');

module.exports = {
    inserir: async usuario => {
        return await connection('tb_usuario').insert({
            nprocesso: usuario.nprocesso,
            nome: usuario.nome,
            email: usuario.email,
            password: usuario.password,
        });
    },
};
