//=-=-=-=-=-Header-=-=-=-=-=//
export class SvgElement {
    constructor(id, width, height, path) {
        this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.element.id = id;
        this.element.style.width = width;
        this.element.style.height = height;
        this.element.innerHTML = path;
    }

    appendTo(parent) {
        parent.appendChild(this.element)
    }
}

//=-=-=-=-=-Page Core-=-=-=-=-=//
export class DivElement {
    constructor(id) {
        this.element = document.createElement('div');
        this.element.id = id;
    }
    appendTo(parent) {
        parent.appendChild(this.element)
    }
}