import { storeData } from './functions';

//=-=-=-=-=-=-=-Drag and Drop-=-=-=-=-=-=-=//
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
    
    //=-=-=-=-=-=-=-=-Mouse Drag and Drop-=-=-=-=-=-=-=-=//
        draggable.addEventListener('drag', (e) => {
            const dragged = e.target;
            dragged.classList.add('dragging');
        });
        
        draggable.addEventListener('drop', (e) => {
            e.preventDefault();
            const target = e.target;
            const dragged = document.querySelector('.dragging');

            if (target.classList.contains('task')) {
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
                target.classList.add('targetting');
            } else {
                return;
            };
            
        });
    
        draggable.addEventListener('dragleave', (e) => {
            e.preventDefault();
            const targetting = e.target;
            targetting.classList.remove('targetting');
        });
    });
};