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
    });
});

//=-=-=-=-=-=-=-Change theme button event-=-=-=-=-=-=-=//
const theme = document.querySelectorAll('#opt-cm, #mobile-ocm');
theme.forEach(theme => {
    theme.addEventListener('click', function () {
        document.body.classList.toggle('theme-b');
    });
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
        };
    });
    notasks();
});

//=-=-=-=-=-=-=-When the finished task button is clicked-=-=-=-=-=-=-=//
tasks.forEach(task => {
    task.addEventListener('click', function(e) {
        const text = task.querySelector('p');
        const check = task.querySelector('.check-case svg');
        if (e.target === check || e.target === text) {
            task.classList.toggle('checked');
            storeData();
            if (filters[1].classList.contains('active') && task.classList.contains('checked')) {
                task.style.display = 'none';
                notasks();
            };
            if (filters[2].classList.contains('active') && task.classList.contains('checked') === false) {
                task.style.display = 'none';
                notasks();
            };
        };
    });
});

//=-=-=-=-=-=-=-Tasks filters-=-=-=-=-=-=-=//
// Change style for the selected filter //
filters.forEach(filter => {
    filter.addEventListener('click', function (e) {
        this.classList.add('active');
        filters.forEach(button => {
            if (button !== this) {
                button.classList.remove('active')
            };
        });
    });
});

// All Tasks filter //
filters[0].addEventListener('click', function () {
    tasks.forEach(element => {
        element.removeAttribute('style');
    });
    notasks();
})

// Not Finished Tasks filter //
filters[1].addEventListener('click', function () {
    tasks.forEach(element => {
        if (element.classList.contains('checked')) {
            element.style.display = 'none';
        } else {
            element.removeAttribute('style');
        };
    });
    notasks();
})

// Finished Tasks filter //
filters[2].addEventListener('click', function () {
    tasks.forEach(element => {
        if (!element.classList.contains('checked')) {
            element.style.display = 'none';
        } else {
            element.removeAttribute('style');
        };
    });
    notasks();
})

const input = document.querySelector('#search input');
input.addEventListener('focusin', () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
        document.body.classList.add('mob-act');
    }
})
input.addEventListener('focusout', () => {
    if (document.body.classList.contains('mob-act')) {
        document.body.classList.remove('mob-act');
    }
})