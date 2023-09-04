//=-=-=-=-=-=-=-Imports and global variables-=-=-=-=-=-=-=//
import { notasks, howToCloseModal, instanceTemplate, refreshEvents, storeData } from "./functions";

//=-=-=-=-=-=-=-Gather the stored JSON-=-=-=-=-=-=-=//
// Load stored tasks //
const storedJson = localStorage.getItem('taskList');
if (storedJson) {
    const parsedJson = JSON.parse(storedJson);
    const storedTasks = Object.values(parsedJson);
    storedTasks.forEach(task => {
        instanceTemplate(task.name, task.checked);
    })
    refreshEvents();
} else {
    notasks();
}

// Load stored dark or light theme //
const storedTheme = localStorage.getItem('theme');
const parsedTheme = JSON.parse(storedTheme);
if (parsedTheme && parsedTheme.theme === 'theme-b') {
    document.body.classList.add('theme-b');
};

//=-=-=-=-Makes the modal appears when clicking on the button-=-=-=-=//
const newtask = document.querySelectorAll('#newtask-btn, #mobile-ntb');
const modal = document.querySelector('#mod');
let i;
newtask.forEach(button => {
    button.addEventListener('click', () => {
        if (modal.classList.contains('inactive')) {
            modal.classList.replace('inactive', 'active');
        } else {
            modal.classList.add('active');
        }
        howToCloseModal();
    });
});

//=-=-=-=-=-=-=-Form submit event-=-=-=-=-=-=-=//
const form = document.querySelector('#modal-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
        // Removes invalid class if the user attempted a wrong input
        this.classList.remove('invalid');

        // Create a task with the value returned by the form
        const input = this.querySelector('input');
        instanceTemplate(input.value);

        // Hides the modal window
        modal.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('inactive');
        }, 500);
        const hintMessage = document.querySelector('#mod-msg-box');
        hintMessage.removeAttribute('class');

        // Reset the input, because the form don't reload the page so we have to do it manually
        input.value = '';

        // Ensure that the task will be added as hidden if the user has the 'Finished' filter active
        const filter = document.querySelector('button#finished');
        if (filter.classList.contains('active')) {
            const task = document.querySelector('.task:first-child');
            task.style.display = 'none';
        }

        // Refreshing event listeners and stores the HTML in the local storage
        refreshEvents();
        storeData();
    } else {
        // If the form is invalid, it'll not be activated and add the class 'invalid' to itself
        this.classList.add('invalid');
    };
});