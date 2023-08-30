import { notasks, storeData } from './functions';

const filters = document.querySelectorAll('.filter');
const modal = document.querySelector('#mod');

// Prevent forms to go, useful for the form of the task creation //
const form = document.querySelector('#search');
form.addEventListener('submit', e => {
    e.preventDefault();
});

//=-=-=-=-=-=-=-Delete all finished tasks-=-=-=-=-=-=-=//
const delall = document.querySelectorAll('#opt-da, #mobile-oda');
delall.forEach(del => {
    del.addEventListener('click', function() {
        const tasks = document.querySelectorAll('.task');
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

//=-=-=-=-=-=-=-Exit Modal when clicking outside it-=-=-=-=-=-=-=//
modal.addEventListener('mousedown', function(e) {
    if (e.target == modal && e.button === 0) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('inactive');
        }, 500);
        const hintMessage = document.querySelector('#mod-msg-box');
        hintMessage.removeAttribute('class');
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
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(element => {
        element.removeAttribute('style');
    });
    notasks();
})

// Not Finished Tasks filter //
filters[1].addEventListener('click', function () {
    const tasks = document.querySelectorAll('.task');
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
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(element => {
        if (!element.classList.contains('checked')) {
            element.style.display = 'none';
        } else {
            element.removeAttribute('style');
        };
    });
    notasks();
})

//=-=-=-=-=-=-=-When the finished task button is clicked-=-=-=-=-=-=-=//
/**
 * Checkboxes function/event
 */
export function checkTask() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.addEventListener('click', function(e) {
            const text = task.querySelector('p');
            if (text.contentEditable === 'false' || text.contentEditable === 'inherit') {
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
            }
            e.stopImmediatePropagation();
        });
    });
}

//=-=-=-=-=-=-=-Delete a task by clicking the red bin-=-=-=-=-=-=-=//
/**
 * Delete task buttons event
 */
export function deleteTask() {
    const bins = document.querySelectorAll('#tasks-box .del-task');
    bins.forEach(bin => {
        bin.addEventListener('click', function () {
            let task = bin.parentElement.parentElement.parentElement;
            task.remove();
            storeData();
            notasks();
        })
    })
}

//=-=-=-=-=-=-=-Modify a task by clicking the edit button-=-=-=-=-=-=-=//
/**
 * Modify task button event
 */
export function modifTask() {
    const edits = document.querySelectorAll('#tasks-box .mdf-task');
    edits.forEach(edit => {
        edit.addEventListener('click', function (e) {
            let text = edit.parentElement.parentElement.parentElement.querySelector('.task-infos p');
            if (text.contentEditable === 'true') {
                text.contentEditable = 'false';
            } else {
                text.contentEditable = 'true';
            }
            edit.classList.toggle('editing');
            if (edit.classList.contains('editing')) {
                edit.innerHTML = '<path d="M19.0813 0.234375C18.7598 -0.078125 18.2327 -0.078125 17.9112 0.234375L8.17853 9.6586L3.16623 4.77078C2.84476 4.45713 2.32119 4.45713 1.99736 4.77078L0.241101 6.47064C-0.0803671 6.78085 -0.0803671 7.29138 0.241101 7.60388L7.58878 14.7673C7.91025 15.0776 8.43381 15.0776 8.75883 14.7673L20.8363 3.06862C21.1625 2.75612 21.1625 2.24445 20.8363 1.9308L19.0813 0.234375Z"></path>';
            } else {
                edit.innerHTML = '<g id="Page-1" stroke="none" stroke-width="1"><g id="Dribbble-Light-Preview" transform="translate(-419.000000, -359.000000)"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M384,209.210475 L384,219 L363,219 L363,199.42095 L373.5,199.42095 L373.5,201.378855 L365.1,201.378855 L365.1,217.042095 L381.9,217.042095 L381.9,209.210475 L384,209.210475 Z M370.35,209.51395 L378.7731,201.64513 L380.4048,203.643172 L371.88195,212.147332 L370.35,212.147332 L370.35,209.51395 Z M368.25,214.105237 L372.7818,214.105237 L383.18415,203.64513 L378.8298,199 L368.25,208.687714 L368.25,214.105237 Z" id="edit_cover-[#1481]"></path></g></g></g>';
                storeData();
            }
            console.log(edit)
            notasks();
            e.stopImmediatePropagation();
        })
    })
}