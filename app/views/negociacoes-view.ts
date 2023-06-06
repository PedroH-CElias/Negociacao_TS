import { Negociacoes } from "../models/negociacoes.js"
import { View } from "./view.js"

export class NegociacoesView extends View<Negociacoes> { // definir tipo de parametros para os metodos 

    protected template(model: Negociacoes): string {
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
                            <td>${this.formatar(negociacao.data) // formatacao da data
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

    private formatar(data: Date){
        return new Intl.DateTimeFormat().format(data) // formatacao da data
    }

}