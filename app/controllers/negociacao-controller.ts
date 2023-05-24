import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {

    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView("#negociacoesView")
    private mensagemView = new MensagemView("#mensagemView")

    constructor (){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes)
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao) // adicionando  negociacao na lista de negociacoes
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação incluida com sucessso!")
        this.limparFormulario()
        
    }

    criaNegociacao(): Negociacao { // declarar tipo do metodo (especifico do TS)
        const exp = /-/g //criando uma expressao regular, pegar todos os hifens, por isso o g no final
        const date = new Date(this.inputData.value.replace(exp, ',')) // pega a data do input e substitui todos os - por ,
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(date, quantidade, valor)
    }

    limparFormulario(): void{
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus() // colocar a sugestao = dd/mm/yyyy
    }
}