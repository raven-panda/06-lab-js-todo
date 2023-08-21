import { GlobalVariables } from "../var";
import { instanceTemplate, notasks, deleteTask, storeData } from "./functions";
import { dragndrop } from "./dragndrop";
const gv = new GlobalVariables();
gv.refresh();

notasks();
deleteTask()


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

dragndrop();
// Makes the modal appears when clicking on the button //
gv.newt.addEventListener('click', () => {
    gv.modal.classList.add('active')
})

// Form submit event //
const form = document.querySelector('#modal-form');
form.addEventListener('submit', function (e) {
    if (this.checkValidity()) {
        this.classList.remove('invalid');
        let value = this.querySelector('input').value;

        gv.modal.classList.remove('active');
        instanceTemplate(value);
        notasks();
        dragndrop();
        deleteTask();
        storeData();
    } else {
        e.preventDefault();
        this.classList.add('invalid');
    }
})