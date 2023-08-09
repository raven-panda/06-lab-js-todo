import { GlobalVariables } from "../var";
const gv = new GlobalVariables();

export function instanceTemplate(data, id = '') {
    const template = document.querySelector('template');
    const instance = document.importNode(template.lastChild, true);
    instance.id = id;
    const title = instance.querySelector('p');
    
    title.textContent = data;
    
    gv.tbox.prepend(instance);
}
