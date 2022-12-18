const CampoObrigatorio = require('./error/campo-obrigatorio');
const EmailInvalido = require('./error/Email-invalido');

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
            throw new CampoObrigatorio();
    }

    ValidarEmail() {
        const emailRegex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegex.test(this.email)) throw new EmailInvalido();
    }
}

module.exports = Usuario;
