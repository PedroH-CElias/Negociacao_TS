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

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao { // declarar tipo do metodo (especifico do TS)
        // static = poder chamar o metodo atraves diretamente da classe
        const exp = /-/g //criando uma expressao regular, pegar todos os hifens, por isso o g no final
        const date = new Date(dataString.replace(exp, ',')) // pega a data do input e substitui todos os - por ,
        const quantidade = parseInt(quantidadeString)
        const valor = parseFloat(valorString)
        return new Negociacao(date, quantidade, valor)
    }
}