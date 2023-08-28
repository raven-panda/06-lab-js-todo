//=-=-=-=-=-=-=-Imports and global variables-=-=-=-=-=-=-=//
import { instanceTemplate, refreshEvents, storeData } from "./functions";
import { dragndrop } from "./dragndrop";
const taskbox = document.querySelector('#tasks-box');
const modal = document.querySelector('#mod');

refreshEvents();

//=-=-=-=-=-=-=-Gather the stored HTML-=-=-=-=-=-=-=//
const stored = localStorage.getItem('task');
if (stored !== '') {
    taskbox.innerHTML = stored;
    const tasks = document.querySelectorAll('.task');

    tasks.forEach(element => {
        element.removeAttribute('style');
    });

    refreshEvents();
};
dragndrop(); // Refresh the 'Drag and Drop' event listeners of tasks

//=-=-=-=-Makes the modal appears when clicking on the button-=-=-=-=//
const newtask = document.querySelectorAll('#newtask-btn, #mobile-ntb');
newtask.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('active');
    });
});

//=-=-=-=-=-=-=-Form submit event-=-=-=-=-=-=-=//
const form = document.querySelector('#modal-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
        // Removes invalid class if the user attempted a wrong input
        this.classList.remove('invalid');

        // Create a task with the value returned by the form (input)
        let value = this.querySelector('input').value;
        instanceTemplate(value);

        // Hides the dialog box
        modal.classList.remove('active');

        // Stores the HTML in the local storage
        refreshEvents();
        dragndrop();
        storeData();
    } else {
        // If the form is invalid, it'll not be activated and add the class 'invalid' to itself
        this.classList.add('invalid');
    };
});