//=-=-=-=-=-=-=-Imports and global variables-=-=-=-=-=-=-=//
import { howToCloseModal, instanceTemplate, refreshEvents, storeData } from "./functions";
import { dragndrop } from "./dragndrop";

refreshEvents();

//=-=-=-=-=-=-=-Gather the stored JSON-=-=-=-=-=-=-=//
const stored = localStorage.getItem('taskJSON');
if (stored) {
    const parsedJSON = JSON.parse(stored);
    const arr = Object.values(parsedJSON);
    arr.forEach(element => {
        instanceTemplate(element.name, element.checked);
    })
    refreshEvents();
};
dragndrop(); // Refresh the 'Drag and Drop' event listeners of tasks

//=-=-=-=-Makes the modal appears when clicking on the button-=-=-=-=//
const newtask = document.querySelectorAll('#newtask-btn, #mobile-ntb');
const modal = document.querySelector('#mod');
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
        input.value = '';

        // Stores the HTML in the local storage
        refreshEvents();
        dragndrop();
        storeData();
    } else {
        // If the form is invalid, it'll not be activated and add the class 'invalid' to itself
        this.classList.add('invalid');
    };
});