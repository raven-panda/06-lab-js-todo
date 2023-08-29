//=-=-=-=-=-Header-=-=-=-=-=//
class BaseElement {
    appendTo(parent) {
        parent.appendChild(this.element)
    }
    cloneInto(parent) {
        parent.appendChild(this.element.cloneNode(true));
    }
    draggable(bool) {
        this.element.draggable = bool;
    }
}

export class SvgElement extends BaseElement{
    constructor(id, classe = '', width, height, path, fill = '#000000', viewbox = '') {
        super();
        this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.element.id = id;
        if (classe !== '') {
            this.element.classList.add(classe)
        }
        this.element.setAttribute('width', `${width}`);
        this.element.setAttribute('height', `${height}`);
        this.element.setAttribute('fill', fill);
        this.element.innerHTML = path;
        if (viewbox != '') {
            this.element.setAttribute('viewBox', viewbox);
        };
    }
}

//=-=-=-=-=-Page Core-=-=-=-=-=//
export class DivElement extends BaseElement {
    constructor(id = '', classe = '') {
        super();
        this.element = document.createElement('div');
        if (id !== '')
            this.element.id = id;
        if (classe !== '') {
            if (Array.isArray(classe)) {
                classe.forEach(c => this.element.classList.add(c))
            } else {
                this.element.classList.add(classe);
            }
        };
    }
}

export class InputElement extends BaseElement {
    constructor(id, placeholder, req) {
        super();
        this.element = document.createElement('input');
        this.element.name = id;
        this.element.id = id;
        this.element.placeholder = placeholder;
        if (req === 'required')
            this.element.required = true;
    }
}

export class ButtonElement extends BaseElement {
    constructor(id, classe = '', type = '', content) {
        super();
        this.element = document.createElement('button');
        this.element.id = id;
        if (classe !== '') {
            if (Array.isArray(classe)) {
                classe.forEach(c => this.element.classList.add(c))
            } else {
                this.element.classList.add(classe);
            }
        };
        if (type !== '')
            this.element.type = type;
        this.element.innerHTML = content;
    }
}

export class TextElement extends BaseElement {
    constructor(element, id = '', text) {
        super();
        this.element = document.createElement(element);
        if (id !== '')
            this.element.id = id;
        this.element.innerText = text;
    }
}

export class FormElement extends BaseElement {
    constructor(id, action = '', method = '', nv = '') {
        super();
        this.element = document.createElement('form');
        this.element.id = id;
        this.element.name = id;
        if (action !== '')
            this.element.action = action;
        if (method !== '')
            this.element.method = method;
        if (nv === 'novalidate')
            this.element.noValidate = true;
    }
}