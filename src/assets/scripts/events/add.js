import { GlobalVariables } from "../var";
import { instanceTemplate, notasks, deleteTask, storeData } from "./functions";
import { dragndrop } from "./dragndrop";
const gv = new GlobalVariables();

// Refreshes query selectors in GlobalVariables,
// call those functions to see if there is tasks (notasks) and refresh event listeners of bins (deleteTask).
gv.refresh();
notasks();
deleteTask()

//=-=-=-=-=-=-=-Gather the stored HTML-=-=-=-=-=-=-=//
const storeJSON = localStorage.getItem('task');
const parsed = JSON.parse(storeJSON);
if (parsed.html !== '') {
    gv.tbox.innerHTML = parsed.html;
    gv.refresh();
    gv.tasks.forEach(element => {
        element.removeAttribute('style');
    })
    notasks();
    deleteTask();
}
dragndrop(); // Refresh the 'Drag and Drop' event listeners of tasks

//=-=-=-=-Makes the modal appears when clicking on the button-=-=-=-=//
const newtask = document.querySelectorAll('#newtask-btn, #mobile-ntb')
newtask.forEach(button => {
    button.addEventListener('click', () => {
        gv.modal.classList.add('active')
    })
})

//=-=-=-=-=-=-=-Form submit event-=-=-=-=-=-=-=//
const form = document.querySelector('#modal-form');
form.addEventListener('submit', function (e) {
    if (this.checkValidity()) {
        // Removes invalid class if the user attempted a wrong input
        this.classList.remove('invalid');

        // Create a task with the value returned by the form (input)
        let value = this.querySelector('input').value;
        instanceTemplate(value);

        // Hides the dialog box
        gv.modal.classList.remove('active');

        // Refresh event listeners for bins, Drag and Drop, no task found message, and store the HTML in the local storage
        notasks();
        dragndrop();
        deleteTask();
        storeData();
    } else {
        // If the form is invalid, it'll not activate and add the class invalid to itself
        e.preventDefault();
        this.classList.add('invalid');
    }
})