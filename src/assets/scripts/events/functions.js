import { checkTask, deleteTask, modifTask } from "./events";

const taskbox = document.querySelector('#tasks-box');
const notask = document.querySelector('#notasks');

export function refreshEvents(_notask = true, _checktask = true, _modify = true, _delete = true) {
    if (_notask) notasks();
    if (_checktask) checkTask();
    if (_modify) deleteTask();
    if (_delete) modifTask();
};

export function howToCloseModal() {
    const hintMessage = document.querySelector('#mod-msg-box');
    hintMessage.classList.add('shown');
    setTimeout(() => {
        hintMessage.removeAttribute('class');
    }, 5000);
};

export function storeData() {
    const tasks = document.querySelectorAll('.task');
    const object = {};
    for (let i = tasks.length - 1; i >= 0; i--) {
        object[`task${i + 1}`] = {
            name : tasks[i].querySelector('p').textContent,
            checked : tasks[i].classList.contains('checked') ? true : false
        };
    }
    localStorage.setItem('taskJSON', JSON.stringify(object));
};

export function instanceTemplate(data, classe = '') {
    const template = document.querySelector('#task-temp');
    const instance = template.content.querySelector('.task').cloneNode(true);
    const title = instance.querySelector('p');
    title.textContent = data;

    if (classe === true) {
        instance.classList.add('checked');
    };

    taskbox.prepend(instance);
};

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
};