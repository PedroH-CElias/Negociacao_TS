export class Negociacoes {
    constructor() {
        this.negociacoes = []; // declaracao de uma lista de negociacao
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao); // push adiciona um item na lista
    }
    lista() {
        return this.negociacoes;
    }
}
