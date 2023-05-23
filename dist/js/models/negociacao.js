export class Negociacao {
    // _ eh costume da linguagem em dizer que o atributo eh private
    constructor(// quando o construtor recebe atributos, pode-se delcarar eles diretamente aqui
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); // clone da data armazenada, para defender de alteracoes
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
