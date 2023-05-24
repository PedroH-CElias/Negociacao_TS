export abstract class View <Tipo> { // nao pode ser instanciada // tipo generico

    protected elemento: HTMLElement // sempre que for algo de html eu dou valor a ele usando o document.querySelector (passando algum elemento do html)
    
    constructor(seletor: string){ // seletor css como parametro
        this.elemento = document.querySelector(seletor)  // armazenar o elemento adquirido no template a partir do controller
    }


    abstract template(model: Tipo): string // obriga as filhas a implemetarem esse metodo

    update(model: Tipo): void{
        const template = this.template(model)
        this.elemento.innerHTML = template // transforma elemento html (string) em DOM
    }
}