import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController()

const form = document.querySelector('.form')
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault() // nao recarregar a pagina ao dar o submit
        controller.adiciona()
    })
}else{
    throw Error("O formulario nao existe")
}
