export abstract class View <Tipo> { // nao pode ser instanciada // tipo generico

    protected elemento: HTMLElement // sempre que for algo de html eu dou valor a ele usando o document.querySelector (passando algum elemento do html)
    private escapar = false

    constructor(seletor: string, escapar?: boolean){ // seletor css como parametro // ? torna o parametro opcional, sempre declarar por  ultimo
        const elemento = document.querySelector(seletor) // armazenar o elemento adquirido no template a partir do controller
        if(elemento){
            this.elemento = elemento as HTMLInputElement
        }else{
            throw Error(`Seletor ${seletor} nao existe no DOM `)
        }
        if(escapar){
            this.escapar = escapar
        }
    }


    protected abstract template(model: Tipo): string // obriga as filhas a implemetarem esse metodo

    public update(model: Tipo): void{
        let template = this.template(model)
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '') // remover tag script indesejada do template
        }
        this.elemento.innerHTML = template // transforma elemento html (string) em DOM
    }
}