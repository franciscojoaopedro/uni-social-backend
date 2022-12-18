class ErroInexperado extends Error {
    statusCode = 422;

    constructor() {
        super('Ocorreu um erro. Por favor tente novamente');
        this.name = 'ErroInexperado';
    }
}

module.exports = ErroInexperado;
