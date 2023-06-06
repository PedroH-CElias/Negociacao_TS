import { DiasDaSemana } from "../enums/diasDaSemana.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {

    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView("#negociacoesView", true)
    private mensagemView = new MensagemView("#mensagemView")

    constructor (){
        this.inputData = document.querySelector('#data') as HTMLInputElement // pegando o item com id data do index.html e jogando no input // casting para dizer que o valor ano eh nulo
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement // pegando o item com id quantidade do index.html e jogando no input
        this.inputValor = document.querySelector('#valor') as HTMLInputElement // pegando o item com id valor do index.html e jogando no input
        this.negociacoesView.update(this.negociacoes) // lancando as negociacoes no metodo update
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value) // posso fazer iso devido ao metodo ser static
        if(!this.ehDiaUtil(negociacao.data)){ 
          this.mensagemView.update("Apenas negociações em dias úteis são aceitas")
          return
        }
        this.negociacoes.adiciona(negociacao) // adicionando  negociacao na lista de negociacoes
        this.limparFormulario()
        this.atualizaView()  
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO // getDay pega o dia da semana de 0 a 6, sendo 0 domingo e 6 sabado, e assim por diante
    }


    private limparFormulario(): void{
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus() // colocar a sugestao = dd/mm/yyyy
    }

    private atualizaView() : void{
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação incluida com sucessso!")
    }
}