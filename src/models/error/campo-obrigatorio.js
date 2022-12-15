class CampoObrigatorio extends Error {
    statusCode = 422;

    constructor() {
        super('Campo Obrigatório, empreencha o campo');
        this.name = 'Campo-obrigatorio';
    }
}

module.exports = CampoObrigatorio;
