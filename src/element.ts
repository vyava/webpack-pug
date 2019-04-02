export default class Element {
    el: HTMLElement;

    constructor() {
        this.el = document.createElement("p");
        console.log("okok")
        this.el.innerHTML = "Zafer Genc";
    }

    public getElement() {
        return this.el;
    }
}