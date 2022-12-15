const CampoObrigatorio = require('./error/campo-obrigatorio');

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
        if (!this.nprocesso || !this.nome || !this.email || !this.password) {
            throw new CampoObrigatorio();
        }
    }
}

module.exports = Usuario;
