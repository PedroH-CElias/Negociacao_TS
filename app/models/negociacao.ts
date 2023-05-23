export class Negociacao {
    // _ eh costume da linguagem em dizer que o atributo eh private
    constructor( // quando o construtor recebe atributos, pode-se delcarar eles diretamente aqui
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get data(): Date{
        const data = new Date(this._data.getTime()) // clone da data armazenada, para defender de alteracoes
        return data
    }

    get volume(): number {
        return this.quantidade * this.valor
    }
}