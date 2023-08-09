//=-=-=-=-=-Header-=-=-=-=-=//
class BaseElement {
    appendTo(parent) {
        parent.appendChild(this.element)
    }
    cloneInto(parent) {
        parent.appendChild(this.element.cloneNode(true));
    }
}

export class SvgElement extends BaseElement {
    constructor(id = '', classe = '', width, height, path, fill = '#000000') {
        super();
        this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.element.id = id;
        if (classe !== null && classe !== '') { this.element.classList.add(classe) }
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.setAttribute('fill', fill);
        this.element.innerHTML = path;
    }
}

//=-=-=-=-=-Page Core-=-=-=-=-=//
export class TaskTemplate extends BaseElement {
    constructor() {
        super();
        this.element = document.createElement('template');
    }
}

export class DivElement extends BaseElement {
    constructor(id = '', classe = '') {
        super();
        this.element = document.createElement('div');
        this.element.id = id;
        if (classe !== null && classe !== '') { this.element.classList.add(classe) };
    }
}

export class InputElement extends BaseElement {
    constructor(id = '', placeholder = '') {
        super();
        this.element = document.createElement('input');
        this.element.name = id;
        this.element.placeholder = placeholder;
    }
}

export class ButtonElement extends BaseElement {
    constructor(id = '', classe = '', type = '', content = '') {
        super();
        this.element = document.createElement('button');
        this.element.id = id;
        if (classe !== null && classe !== '') { this.element.classList.add(classe) };
        this.element.type = type;
        this.element.innerHTML = content;
    }
}

export class Paragraph extends BaseElement {
    constructor(id = '', text = '') {
        super();
        this.element = document.createElement('p');
        this.element.id = id;
        this.element.innerText = text;
    }
}