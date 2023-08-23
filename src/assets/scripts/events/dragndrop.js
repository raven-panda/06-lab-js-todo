import { storeData } from './functions';

//=-=-=-=-=-=-=-Drag and Drop-=-=-=-=-=-=-=//
export function dragndrop() {
    let draggables = document.querySelectorAll('#tasks-box > .task');

    function swapElements(obj1, obj2) {
        let temp = document.createElement("div");

        obj1.parentNode.insertBefore(temp, obj1);
        obj2.parentNode.insertBefore(obj1, obj2);
        temp.parentNode.insertBefore(obj2, temp);
        temp.parentNode.removeChild(temp);
    };
    
    draggables.forEach(draggable => {
        
    
        draggable.addEventListener('drag', (e) => {
            const dragged = e.target;
            dragged.classList.add('dragging');
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
    
        draggable.addEventListener('drop', (e) => {
            e.preventDefault();
            const target = e.target;
            const dragged = document.querySelector('.dragging');
            
            if (target.classList.contains('task')) {
                swapElements(target, dragged);
                target.classList.remove('targetting');
                dragged.classList.remove('dragging');
                storeData();
            } else {
                return;
            };
        });

        draggable.addEventListener('touchmove', function(e) {
            e.preventDefault();
            console.log(e.target)
            let touchloc = e.touches[0];
            if (e.target) {
                let touched = draggable;
                touched.style.left = `calc(${touchloc.pageX}px - 40vw)`;
                touched.style.top = `calc(${touchloc.pageY}px - 5vh)`;
                touched.classList.add('touching');
            }
        })
        draggable.addEventListener('touchend', function(e) {
            e.preventDefault();
            if (e.target) {
                let touched = draggable;
                touched.style.transform = '';
                touched.classList.remove('touching');
            }
        })

    });
};
