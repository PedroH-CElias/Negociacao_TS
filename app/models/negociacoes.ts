import { Negociacao } from "./negociacao.js";

export class Negociacoes{

    private negociacoes: Array<Negociacao> = [] // declaracao de uma lista de negociacao

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao) // push adiciona um item na lista
    }

    lista(): ReadonlyArray<Negociacao>{ // array somente de leitura, impossivel de alterar
        return this.negociacoes

    }
}