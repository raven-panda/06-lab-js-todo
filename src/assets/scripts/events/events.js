import { GlobalVariables } from '../var';
import './add';
import { notasks } from './functions';

const gv = new GlobalVariables;

// Delete all tasks //
const delall = document.querySelector('#opt-da');
delall.addEventListener('click', function() {
    gv.tasks.forEach(task => {
        task.remove();
        localStorage.clear();
    });
    notasks();
});