import { GlobalVariables } from '../var';
import './add';
import { notasks, storeData } from './functions';

const gv = new GlobalVariables;
gv.refresh();

//=-=-=-=-=-=-=-Delete all finished tasks-=-=-=-=-=-=-=//
const delall = document.querySelectorAll('#opt-da, #mobile-oda');
delall.forEach(del => {
    del.addEventListener('dblclick', function() {
        gv.tasks.forEach(task => {
            if (task.classList.contains('checked')) {
                task.remove();
            }
        });
        localStorage.clear();
        notasks();
        storeData();
    })
});

//=-=-=-=-=-=-=-Change theme button event-=-=-=-=-=-=-=//
const theme = document.querySelectorAll('#opt-cm, #mobile-ocm');
theme.forEach(theme => {
    theme.addEventListener('click', function () {
        document.body.classList.toggle('theme-b');
    })
});

//=-=-=-=-=-=-=-Quit Modal when clicking outside it-=-=-=-=-=-=-=//
gv.modal.addEventListener('mousedown', function(e) {
    if (e.target == gv.modal) {
        gv.modal.classList.remove('active');
    };
});

//=-=-=-=-=-=-=-Search for a task-=-=-=-=-=-=-=//
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

//=-=-=-=-=-=-=-When the finished task button is clicked-=-=-=-=-=-=-=//
const checkcase = document.querySelectorAll('#tasks-box .check-case');
checkcase.forEach(check => {
    check.addEventListener('click', function() {
        const parent = check.parentElement.parentElement;
        parent.classList.toggle('checked');
        storeData();
    })
})

//=-=-=-=-=-=-=-Tasks filters-=-=-=-=-=-=-=//
// Change style for the selected filter //
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

// All Tasks filter //
gv.filters[0].addEventListener('click', function () {
    gv.tasks.forEach(element => {
        element.removeAttribute('style');
    })
})

// Not Finished Tasks filter //
gv.filters[1].addEventListener('click', function () {
    gv.tasks.forEach(element => {
        if (element.classList.contains('checked')) {
            element.style.display = 'none';
        } else {
            element.removeAttribute('style');
        }
    })
})

// Finished Tasks filter //
gv.filters[2].addEventListener('click', function () {
    gv.tasks.forEach(element => {
        if (!element.classList.contains('checked')) {
            element.style.display = 'none';
        } else {
            element.removeAttribute('style');
        }
    })
})