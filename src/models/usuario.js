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

    verificarEmail() {
        console.log(`Email verificado ${this.email}`);
    }
}

module.exports = Usuario;
