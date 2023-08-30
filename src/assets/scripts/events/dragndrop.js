import { storeData } from './functions';

//=-=-=-=-=-=-=-Drag and Drop-=-=-=-=-=-=-=//
/**
 * Drag and Drop function
 */
export function dragndrop() {
    const draggables = document.querySelectorAll('#tasks-box > .task');

    function swapElements(obj1, obj2) {
        let temp = document.createElement("div");
        const taskbox = document.querySelector('#tasks-box');

        taskbox.insertBefore(temp, obj1);
        taskbox.insertBefore(obj1, obj2);
        taskbox.insertBefore(obj2, temp);
        taskbox.removeChild(temp);
    };
    
    draggables.forEach(draggable => {

        draggable.addEventListener('drag', (e) => {
            const dragged = e.target;
            dragged.classList.add('dragging');
        });
        
        draggable.addEventListener('drop', (e) => {
            e.preventDefault();
            const target = e.target;
            const dragged = document.querySelector('.dragging');

            if (target.nodeName == 'P') {
                swapElements(target.parentNode.parentNode, dragged);
                target.parentNode.parentNode.classList.remove('targetting');
                dragged.classList.remove('dragging');
                storeData();
                e.stopImmediatePropagation()
            } else if (target.classList.contains('task')) {
                swapElements(target, dragged);
                target.classList.remove('targetting');
                dragged.classList.remove('dragging');
                storeData();
                e.stopImmediatePropagation()
            } else {
                return;
            };
        });
    
        draggable.addEventListener('dragend', (e) => {
            const dragged = e.target;
            dragged.classList.remove('dragging');
        });
    
        draggable.addEventListener('dragover', (e) => {
            e.preventDefault();
            const target = e.target;
            const dragged = document.querySelector('.dragging');
            if (dragged !== target) {
                if (target.nodeName == 'P') {
                    target.parentNode.parentNode.classList.add('targetting');
                } else {
                    target.classList.add('targetting');
                }
            } else {
                return;
            };
            
        });
    
        draggable.addEventListener('dragleave', (e) => {
            e.preventDefault();
            const targetting = e.target;
            if (targetting.nodeName == 'P') {
                targetting.parentNode.parentNode.classList.remove('targetting');
            } else {
                targetting.classList.remove('targetting');
            }
        });
    });
};