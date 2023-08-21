import { GlobalVariables } from "../var";
const gv = new GlobalVariables();
gv.refresh();

export function storeData() {
    const html = document.querySelector('#tasks-box').innerHTML;
    const data = { html: html };
    const dataJSON = JSON.stringify(data);

    localStorage.setItem('task', dataJSON)
}

export function instanceTemplate(data, id = '') {
    const template = document.querySelector('#task-temp');
    const instance = template.content.querySelector('.task').cloneNode(true);
    instance.id = id;
    const title = instance.querySelector('p');
    
    title.textContent = data;
    
    gv.tbox.prepend(instance);
}

export function notasks() {
    const tasks = document.querySelectorAll('#tasks-box .task');
    let i = 0;
    tasks.forEach(element => {
        if (element.style.display == 'none') i++;
    });
    console.log(i, tasks.length);
    if (i === tasks.length) {
        gv.notask.classList.add('nochild');
    } else {
        gv.notask.classList.remove('nochild');
    }
}
export function deleteTask() {
    const bins = document.querySelectorAll('#tasks-box .del-task');
    bins.forEach(bin => {
        bin.addEventListener('click', function () {
            let task = bin.parentElement.parentElement;
            task.remove();
            storeData();
            notasks();
        })
    })
}