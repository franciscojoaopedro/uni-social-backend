class ErroDeValidacao extends Error {
    statusCode = 422;

    constructor(mensagem) {
        super(mensagem);
        this.name = 'ErroDeValidação';
    }
}

module.exports = ErroDeValidacao;
