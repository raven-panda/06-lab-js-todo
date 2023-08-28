import { checkTask, deleteTask, modifTask } from "./events";

const taskbox = document.querySelector('#tasks-box');
const tasks = document.querySelectorAll('.task');
const notask = document.querySelector('#notasks');

export function refreshEvents(_notask = true, _checktask = true, _modify = true, _delete = true) {
    if (_notask) notasks();
    if (_checktask) checkTask();
    if (_modify) deleteTask();
    if (_delete) modifTask();
}

export function storeData() {
    const html = document.querySelector('#tasks-box').innerHTML;
    localStorage.setItem('task', html)
}

export function instanceTemplate(data, id = '') {
    const template = document.querySelector('#task-temp');
    const instance = template.content.querySelector('.task').cloneNode(true);
    instance.id = id;
    const title = instance.querySelector('p');
    
    title.textContent = data;
    
    taskbox.prepend(instance);
}

export function notasks() {
    const tasks = document.querySelectorAll('#tasks-box .task');
    let i = 0;
    tasks.forEach(element => {
        if (element.style.display == 'none') i++;
    });
    if (i === tasks.length) {
        notask.classList.add('nochild');
    } else {
        notask.classList.remove('nochild');
    }
}