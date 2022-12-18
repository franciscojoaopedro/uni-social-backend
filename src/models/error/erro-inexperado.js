class ErroInexperado extends Error {
    statusCode = 500;

    constructor() {
        super('Ocorreu um erro. Por favor tente novamente');
        this.name = 'ErroInexperado';
    }
}

module.exports = ErroInexperado;
