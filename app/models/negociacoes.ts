import { Negociacao } from "./negociacao.js";

export class Negociacoes{

    private negociacoes: Negociacao[] = [] // declaracao de uma lista de negociacao = (Array<Negociacao>)

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao) // push adiciona um item na lista
    }

    lista(): readonly Negociacao[]{ // array somente de leitura, impossivel de alterar =  ReadonlyArray<Negociacao>
        return this.negociacoes

    }
}