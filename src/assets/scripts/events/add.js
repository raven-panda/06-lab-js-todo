import { GlobalVariables } from "../var";
import { instanceTemplate, notasks, deleteTask } from "./functions";
import { dragndrop } from "./dragndrop";
const gv = new GlobalVariables();

notasks();
deleteTask()

const lsData = localStorage.getItem('task');
let lsArray = [];

if (lsData) {
    lsArray = lsData.split(/,(?!\s)/);
    lsArray.forEach(element => {
        instanceTemplate(element);
    }) 
    notasks();
    deleteTask()
}
dragndrop();
// Makes the modal appears when clicking on the button //
gv.newt.addEventListener('click', () => {
    gv.modal.classList.add('active')
})

// Form submit event //
const form = document.querySelector('#modal-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
        let value = this.querySelector('input').value;

        gv.modal.classList.remove('active');
        instanceTemplate(value);
        notasks();
        dragndrop();
        deleteTask();

        lsArray.push(value);
        const lsStore = lsArray.join(',');
        localStorage.setItem('task', lsStore);
    }
})