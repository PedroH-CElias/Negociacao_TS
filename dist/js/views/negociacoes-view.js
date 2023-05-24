import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
                ${model.lista().map(negociacao => {
            return `
                        <tr> 
                            <td>${new Intl.DateTimeFormat().format(negociacao.data) // formatacao da data
            }</td> 
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>             
                    `;
        }).join('')} 
            </tbody>
        </table>
        `;
    }
}
