class EmailInvalido extends Error {
    statusCode = 422;

    constructor() {
        super('Email Inválido. Por favor escreve bem o seu email');
        this.name = 'EmailInvalido';
    }
}

module.exports = EmailInvalido;
