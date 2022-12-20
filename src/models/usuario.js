const ErroDeValidacao = require('./error/erro-de-validacao');

class Usuario {
    nome;
    email;
    password;
    nprocesso;

    constructor(nprocesso, nome, email, password) {
        this.nome = nome;
        this.email = email;
        this.nprocesso = nprocesso;
        this.password = password;
    }

    validarCampos() {
        if (!this.nprocesso || !this.nome || !this.email || !this.password)
            throw new ErroDeValidacao('Campo obrigatório. Por favor prencher!');
    }

    ValidarEmail() {
        const emailRegex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegex.test(this.email))
            throw new ErroDeValidacao(
                'Email Inválido. Por favor escreve bem o seu email',
            );
    }

    verificarUsuarioSeExiste(usuarioExiste) {
        if (usuarioExiste.length !== 0)
            throw new ErroDeValidacao('Já existe uma conta pra esse usuario');
    }
}
module.exports = Usuario;
