import { instanceTemplate, storeData } from './functions';

//=-=-=-=-=-=-=-Drag and Drop-=-=-=-=-=-=-=//
/**
 * Drag and Drop function
 */
export function dragndrop() {
    const draggables = document.querySelectorAll('#tasks-box > .task');

    /**
     * When dropping a dragged task, swaps tasks between the dragging one and the targeted task 
     */
    function swapElements(obj1, obj2) {
        let temp = document.createElement("div");
        const taskbox = document.querySelector('#tasks-box');

        taskbox.insertBefore(temp, obj1);
        taskbox.insertBefore(obj1, obj2);
        taskbox.insertBefore(obj2, temp);
        taskbox.removeChild(temp);
    };

    //=-=-=-=-=-=-=-Desktop Drag and Drop-=-=-=-=-=-=-=//    
    draggables.forEach(draggable => {

        draggable.addEventListener('drag', e => {
            const dragged = e.target;
            dragged.classList.add('dragging');
        });
        
        draggable.addEventListener('drop', e => {
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
    
        draggable.addEventListener('dragend', e => {
            const dragged = e.target;
            dragged.classList.remove('dragging');
        });
    
        draggable.addEventListener('dragover', e => {
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
    
        draggable.addEventListener('dragleave', e => {
            e.preventDefault();
            const targetting = e.target;
            if (targetting.nodeName == 'P') {
                targetting.parentNode.parentNode.classList.remove('targetting');
            } else {
                targetting.classList.remove('targetting');
            }
        });
    });

    //=-=-=-=-=-=-=-Mobile Drag and Drop-=-=-=-=-=-=-=//
    /*
    draggables.forEach(touchable => {
        const taskbox = document.querySelector('#tasks-box');
        var location;

        touchable.addEventListener('touchstart', e => {
            location = e.touches[0];
            var touching = e.target;
            if (!touching.classList.contains('task') || !touching.nodeName === 'P') {
                return false;
            }

            if (touching.classList.contains('task')) {
                var temp = touching.cloneNode(true);
            } else if (touching.nodeName === 'P') {
                var temp = touching.parentNode.parentNode.cloneNode(true);
                touching = touching.parentNode.parentNode;
            }
            temp.id = 'temp';
            temp.style.opacity = '0.5';

            taskbox.insertBefore(temp, touching);

            touching.classList.add('touching');
            touching.style.top = `calc(${location.clientY}px - 5vh)`;
            touching.style.left = `40vw)`;
            e.stopImmediatePropagation();
        });

        touchable.addEventListener('touchmove', e => {
            e.preventDefault();
            location = e.touches[0];

            var touching = e.target;
            if (touching.nodeName === 'P') {
                touching = touching.parentNode.parentNode;
            }

            touching.style.top = `calc(${location.clientY}px - 5vh)`;
            touching.style.left = `40vw)`;

            e.stopImmediatePropagation();
        });

        touchable.addEventListener('touchend', e => {
            var touching = e.target;
            if (touching.nodeName === 'P') {
                touching = touching.parentNode.parentNode;
            }

            var touchTarget = document.elementsFromPoint(location.clientX, location.clientY)[1];
            if (touchTarget.nodeName === 'P') {
                touchTarget = touchTarget.parentElement.parentElement;
            } else if (!touchTarget.classList.contains('task') || !touchTarget.nodeName === 'P') {
                touchTarget = null;
            }

            if (touchTarget) {
                swapElements(touchTarget, touching);
            }
            
            touching.classList.remove('touching');
            touching.style ='';

            const temp = document.querySelector('#temp');
            if (temp) {
                temp.remove();
            }
        });
    });*/
};