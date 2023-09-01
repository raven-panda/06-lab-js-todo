import { dragndrop } from "./dragndrop";
import { checkTask, deleteTask, modifTask } from "./events";

const taskbox = document.querySelector('#tasks-box');
const notask = document.querySelector('#notasks');

/**
 * Refresh event listeners/functions
 * 
 * Useful when some events/functions goes undefined because the DOM as changed after some interactions
 * @param {Boolean} _notask - Refresh the function that display a text when no tasks are shown
 * @param {Boolean} _checktask - Refresh checkboxes
 * @param {Boolean} _modify - Refresh 'modify task' buttons
 * @param {Boolean} _delete - Refresh 'delete task' button
 * @param {Boolean} _dragndrop - Refresh Drag and Drop
 */
export function refreshEvents(_notask = true, _checktask = true, _modify = true, _delete = true, _dragndrop = true) {
    if (_notask) notasks();
    if (_checktask) checkTask();
    if (_modify) deleteTask();
    if (_delete) modifTask();
    if (_dragndrop) dragndrop();
};

/**
 * Display a hint of how to close the modal window
 * 
 * Function called when the modal window opens
 */
let i;
export function howToCloseModal() {
    const hintMessage = document.querySelector('#mod-msg-box');
    hintMessage.classList.add('shown');
    setTimeout(() => {
        hintMessage.removeAttribute('class');
    }, 5000);
};

/**
 * Function that store all the tasks in a JSON object in the local storage
 */
export function storeData() {
    const tasks = document.querySelectorAll('.task');
    const tasksObj = {};
    for (let i = tasks.length - 1; i >= 0; i--) {
        tasksObj[`task${i + 1}`] = {
            name : tasks[i].querySelector('p').textContent,
            checked : tasks[i].classList.contains('checked') ? true : false
        };
    }
    localStorage.setItem('taskJSON', JSON.stringify(tasksObj));

    const theme = {};
    if (document.body.classList.contains('theme-b')) {
        theme['theme'] = 'theme-b';
    } else {
        theme['theme'] = '';
    }
    console.log(theme)
    localStorage.setItem('theme', JSON.stringify(theme));
};

/**
 * Function that displays a text when no tasks are shown
 */
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

/**
 * Instantiate a task template
 * @param {String} data - Title of the task
 * @param {Boolean} classe - Define if the task is checked or not (useful only for the initial injection via local storage)
 */
export function instanceTemplate(data, checked = false) {
    const template = document.querySelector('#task-temp');
    const instance = template.content.querySelector('.task').cloneNode(true);
    const title = instance.querySelector('p');
    title.textContent = data;

    if (checked === true) {
        instance.classList.add('checked');
    };

    taskbox.prepend(instance);
};