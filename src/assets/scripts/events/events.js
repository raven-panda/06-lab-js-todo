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

// Quit Modal when clicking outside it //
gv.modal.addEventListener('mousedown', function(e) {
    if (e.target == gv.modal) {
        gv.modal.classList.remove('active');
    };
});

// Search for a task //
const srchInp = document.querySelector('#task-search');
srchInp.addEventListener('keyup', () => {
    const filter = srchInp.value.toUpperCase();
    let tasks = document.querySelectorAll('#tasks-box .task');
    tasks.forEach(task => {
        const paragraph = task.querySelector('p');
        if (paragraph.textContent.toUpperCase().includes(filter)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    })
    notasks();
})

// When finished button is clicked //
const checkcase = document.querySelectorAll('#tasks-box .check-case');
checkcase.forEach(check => {
    check.addEventListener('click', function() {
        const parent = check.parentElement.parentElement;
        parent.classList.toggle('checked');
    })
})

// Filter tasks //
gv.filters.forEach(filter => {
    filter.addEventListener('click', function (e) {
        this.classList.add('active');
        gv.filters.forEach(button => {
            if (button !== this) {
                button.classList.remove('active')
            }
        })
    })
})