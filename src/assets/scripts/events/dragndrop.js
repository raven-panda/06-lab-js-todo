import { instanceTemplate, storeData } from './functions';

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

    // Desktop Drag and Drop //    
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
    // window.addEventListener('touchmove', e => {
    //     const touch = e.touches[0];
    //     return touch;
    // });

    // Mobile Drag and Drop //
    draggables.forEach(touchable => {
        const taskbox = document.querySelector('#tasks-box');
        var location, touchTarget;

        touchable.addEventListener('touchstart', e => {
            location = e.touches[0];
            const touching = e.target;

            const temp = touching.cloneNode(true);
            temp.id = 'temp';
            temp.style.opacity = '0.5';
            taskbox.insertBefore(temp, touching);

            touching.classList.add('touching');
            touching.style.top = `calc(${location.clientY}px - 5vh)`;
            touching.style.left = `calc(${location.clientX}px - 40vw)`;

            e.stopImmediatePropagation();
        });

        touchable.addEventListener('touchmove', e => {
            e.preventDefault();
            location = e.touches[0];

            touchTarget = document.elementFromPoint(location.clientX, location.clientY);
            console.log(location.clientX, location.clientY);
            const touching = e.target;
            touching.style.top = `calc(${location.clientY}px - 5vh)`;
            touching.style.left = `calc(${location.clientX}px - 40vw)`;
            e.stopImmediatePropagation();
        });

        touchable.addEventListener('touchend', e => {
            const touching = e.target;
            console.log(location);
            if (touchTarget) {
                if (touchTarget.classList.contains('task')) {
                    swapElements(touchTarget, touching);
                };
            }
            touching.classList.remove('touching');
            touching.style ='';

            const temp = document.querySelector('#temp');
            if (temp) {
                temp.remove();
            }
        });

        /*
        "FIX MEEEE"
         - James Hetfield
        */
        // touchable.addEventListener('touchleave', e => {
        //     const touching = e.target;

        //     taskbox.style = '';
        //     touching.style = '';
        //     touching.classList.remove('touching');

        //     const temp = document.querySelector('#temp');
        //     if (temp) {
        //         temp.remove();
        //     }

        //     console.log('coucou')
        // })
    });
};