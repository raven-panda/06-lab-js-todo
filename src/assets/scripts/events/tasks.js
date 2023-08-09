import { GlobalVariables } from '../var';
const gv = new GlobalVariables();

const template = document.querySelector('template');
function instanceTemplate(data, id = '') {
    const instance = document.importNode(template.lastChild, true);
    instance.id = id;
    const title = instance.querySelector('p');
    
    title.textContent = data;
    
    gv.tbox.prepend(instance);
}

instanceTemplate('yoyo');
instanceTemplate('hahahah');
instanceTemplate('fezekok');
instanceTemplate('289aeazeoa', 'ha');


//=-=-=-=-=-=-=-Drag and Drop-=-=-=-=-=-=-=//
// const draggables = document.querySelectorAll('.task');

const draggables = document.querySelectorAll('.task')

function swapElements(obj1, obj2) {
    let temp = document.createElement("div");

    obj1.parentNode.insertBefore(temp, obj1);
    obj2.parentNode.insertBefore(obj1, obj2);
    temp.parentNode.insertBefore(obj2, temp);
    temp.parentNode.removeChild(temp);
}

draggables.forEach(draggable => {

    draggable.addEventListener('drag', (e) => {
        const dragged = e.target;
        dragged.classList.add('dragging');
    })

    draggable.addEventListener('dragend', (e) => {
        const dragged = e.target;
        dragged.classList.remove('dragging');
    })

    draggable.addEventListener('dragover', (e) => {
        e.preventDefault();
        const targetting = e.target;
        targetting.classList.add('targetting')
    })

    draggable.addEventListener('dragleave', (e) => {
        e.preventDefault();
        const targetting = e.target;
        targetting.classList.remove('targetting')
    })

    draggable.addEventListener('drop', (e) => {
        e.preventDefault();
        const target = e.target;
        const dragged = document.querySelector('.dragging')

        if (dragged !== target) {
            swapElements(target, dragged);
            target.classList.remove('targetting');
            dragged.classList.remove('dragging');
        }
    })

})