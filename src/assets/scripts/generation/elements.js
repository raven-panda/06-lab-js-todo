//=-=-=-=-=-Header-=-=-=-=-=//
class BaseElement {
    /**
     * Append this child into a specific parent
     * @param {String} parent - Inject the element in this parent
     */
    appendTo(parent) {
        parent.appendChild(this.element)
    };
    /**
     * Clone this child into a specific parent
     * @param {String} parent - Inject a clone of the element in this parent
     */
    cloneInto(parent) {
        parent.appendChild(this.element.cloneNode(true));
    };
}

export class SvgElement extends BaseElement{
    /**
     * HTML element constructor - SVG
     * @param {String} id - Add an ID
     * @param {Array|String} classe  - Add one or multiple class(es)
     * @param {String|Number} width - Add a width
     * @param {String|Number} height - Add a height
     * @param {String} path - Inject content into the SVG (<path d=M.26...>, etc)
     * @param {String} fill - Add a color to the SVG
     * @param {String} viewbox - Add a value to its viewBox attribute
     */
    constructor(id, classe = '', width, height, path, fill = '#000000', viewbox = '') {
        super();
        this.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.element.id = id;
        if (classe !== '') {
            if (Array.isArray(classe)) {
                classe.forEach(c => this.element.classList.add(c))
            } else {
                this.element.classList.add(classe);
            }
        };
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
    /**
     * HTML element constructor - Div element
     * @param {String} id - Add an Id
     * @param {Array|String} classe  - Add one or multiple class(es)
     */
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
    /**
     * HTML element constructor - Input
     * @param {String} id - Add an Id
     * @param {String} type - Add a 'type' attribute
     * @param {String} placeholder - Add a 'placeholder' attribute
     * @param {Boolean} required - Add 'required' attribute
     */
    constructor(id, type, placeholder, required) {
        super();
        this.element = document.createElement('input');
        this.element.name = id;
        this.element.id = id;
        this.element.type = type;
        this.element.placeholder = placeholder;
        if (required === true)
            this.element.required = true;
    }
}

export class ButtonElement extends BaseElement {
    /**
     * HTML element constructor - Button
     * @param {String} id - Add an Id
     * @param {String|Array} classe - Add one or multiple class(es)
     * @param {String} type - Add a 'type' attribute
     * @param {Boolean} content - Add a text into the element
     */
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
    /**
     * HTML element constructor - Text tag (p, h1, label, ...)
     * @param {String} tagName - Tag of the element
     * @param {String} id - Add an Id
     * @param {String} text - Add text into the element
     * @param {String|Array} classe - Add one or multiple class(es)
     */
    constructor(tagName, id = '', text = '', classe = '') {
        super();
        this.element = document.createElement(tagName);
        if (id !== '')
            this.element.id = id;
        this.element.innerText = text;
        if (classe !== '') {
            if (Array.isArray(classe)) {
                classe.forEach(c => this.element.classList.add(c))
            } else {
                this.element.classList.add(classe);
            }
        }
    }
}

export class FormElement extends BaseElement {
    /**
     * HTML element constructor - Form
     * @param {String} id - Add an Id
     * @param {String} action - Add an 'action' attribute to the form
     * @param {String} method - Add a 'method' attribute to the form
     * @param {Boolean} novalidate - Add a 'novalidate' attribute to the form
     * @param {Boolean} autocomplete - Enable/disable autocomplete of the form
     */
    constructor(id, action = '', method = '', novalidate = false, autocomplete = true) {
        super();
        this.element = document.createElement('form');
        this.element.id = id;
        this.element.name = id;
        if (action !== '')
            this.element.action = action;
        if (method !== '')
            this.element.method = method;
        if (novalidate === true)
            this.element.noValidate = true;
        if (autocomplete === true || autocomplete === false)
            this.element.autocomplete = autocomplete === true ? 'on' : 'off';
    }
}