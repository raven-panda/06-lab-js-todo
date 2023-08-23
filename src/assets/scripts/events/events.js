import './add';
import { notasks, storeData } from './functions';

const tasks = document.querySelectorAll('.task');
const filters = document.querySelectorAll('.filter');
const modal = document.querySelector('#mod');

//=-=-=-=-=-=-=-Delete all finished tasks-=-=-=-=-=-=-=//
const delall = document.querySelectorAll('#opt-da, #mobile-oda');
delall.forEach(del => {
    del.addEventListener('click', function() {
        tasks.forEach(task => {
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
modal.addEventListener('mousedown', function(e) {
    if (e.target == modal) {
        modal.classList.remove('active');
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
filters.forEach(filter => {
    filter.addEventListener('click', function (e) {
        this.classList.add('active');
        filters.forEach(button => {
            if (button !== this) {
                button.classList.remove('active')
            }
        })
    })
})

// All Tasks filter //
filters[0].addEventListener('click', function () {
    tasks.forEach(element => {
        element.removeAttribute('style');
    })
    notasks();
})

// Not Finished Tasks filter //
filters[1].addEventListener('click', function () {
    tasks.forEach(element => {
        if (element.classList.contains('checked')) {
            element.style.display = 'none';
        } else {
            element.removeAttribute('style');
        }
    })
    notasks();
})

// Finished Tasks filter //
filters[2].addEventListener('click', function () {
    tasks.forEach(element => {
        if (!element.classList.contains('checked')) {
            element.style.display = 'none';
        } else {
            element.removeAttribute('style');
        }
    })
    notasks();
})