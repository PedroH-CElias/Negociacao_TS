export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); // armazenar o elemento adquirido no template a partir do controller
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template; // transforma elemento html (string) em DOM
    }
}
