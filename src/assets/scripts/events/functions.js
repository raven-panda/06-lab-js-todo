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

export function notasks() {
    if (gv.tbox.firstChild == gv.notask) {
        gv.notask.classList.add('nochild');
    } else {
        gv.notask.classList.remove('nochild')
    }
}

export function deleteTask() {
    const bins = document.querySelectorAll('#tasks-box .del-task');
    bins.forEach(bin => {
        bin.addEventListener('click', function () {
            let task = bin.parentElement.parentElement;
            let tval = task.querySelector('p').textContent;

            const lsData = localStorage.getItem('task');
            let lsArray = lsData.split(/,(?!\s)/);
            let filtered = lsArray.filter(el => el != tval );
            let lsStore = filtered;
            localStorage.setItem('task', lsStore);
            task.remove();

            console.log(lsArray);
        })
    })
}