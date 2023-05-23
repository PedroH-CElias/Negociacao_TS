import { Negociacoes } from "../models/negociacoes.js"

export class NegociacoesView {

    private elemento: HTMLElement

    constructor(seletor: string) { // seletor css como parametro
        this.elemento = document.querySelector(seletor) // armazenarr o elemento adquirido no template a partir do controller

    }

    template(model: Negociacoes): string {
        // uso de ` ` para declarar uma template string, ajuda na quebra de linhas
        // tr eh linha, th eh coluna, thead eh o cabecalho da tabela
        return `
        <table class= "table table-hover table-bordered">
            <thead>
                <tr> 
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => { //  O map() é uma função de array que itera sobre cada elemento do array original e cria um novo array com base em uma transformação aplicada a cada elemento. //  => A função de seta é executada para cada elemento do array, e o parâmetro negociacao representa cada elemento individualmente durante a iteração. O restante do código dentro das chaves { ... } é a lógica da função de seta, que será aplicada a cada elemento. // retorna uma lista negociacoes // join separa os elementos strings recebidos com espaco
                    return `
                        <tr> 
                            <td>${new Intl.DateTimeFormat().format(negociacao.data) // formatacao da data
                            }</td> 
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>             
                    `
                }).join('')} 
            </tbody>
        </table>
        `
    }

    update(model: Negociacoes): void {
        const template = this.template(model)
        console.log(template)
        this.elemento.innerHTML = template  // transforma elemento html (string) em DOM
    }
}