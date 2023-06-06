import { Negociacao } from "./negociacao.js";

export class Negociacoes{

    private negociacoes: Negociacao[] = [] // declaracao de uma lista de negociacao = (Array<Negociacao>)

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao) // push adiciona um item na lista
    }

    public lista(): readonly Negociacao[]{ // array somente de leitura, impossivel de alterar =  ReadonlyArray<Negociacao>
        return this.negociacoes

    }
}