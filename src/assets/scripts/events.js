const srchInp = document.querySelector('#srch-bar input')
const filters = document.querySelectorAll('.filter');
const tasksBox = document.querySelector('#tasks-box');
const template = document.querySelector('#task-template');

let storeValue = localStorage.getItem('task');
let storeArray = [];

if (storeValue != null) {
    storeArray = storeValue.split(/\,(?!\s)/);

    let tasks = storeArray;

    tasks.forEach(element => {
        const clone = template.firstElementChild.cloneNode(true);
        const p = clone.querySelector('p');
        p.textContent = element;
        tasksBox.prepend(clone);
    })
}

// Displays if there is no tasks at load //
const noTasks = document.createElement('h1');
    noTasks.id = 'notasks-title';
    noTasks.innerText = 'No tasks to display. You can add a task by clicking the + button above.';
tasksBox.appendChild(noTasks);
function ifNoTasks() {
    if (tasksBox.firstChild == noTasks) {
        noTasks.classList.add('notasks');
    } else {
        noTasks.classList.remove('notasks');
    }
}

// Click on bin event
function allBins() {
    return document.querySelectorAll('#component .del-task');
};
function deleteTask(e) {
    if (e) {
        e.forEach(bin => {
            bin.addEventListener('click', () => {
                const parent = bin.parentNode;
                const p = parent.querySelector('p');
                let pValue = storeArray.filter(word => word != p.textContent);
                storeArray = pValue;
                localStorage.setItem('task', storeArray);
                parent.remove();
                if (storeArray.length === 0) {
                    localStorage.clear()
                }
                ifNoTasks();
            })
        })
    }
}

ifNoTasks();
deleteTask(allBins());

filters.forEach((filter) => {
    filter.addEventListener('click', (e) => {
        const clickedButton = e.target;

        clickedButton.classList.add('selected');
    
        filters.forEach((button) => {
            if (button != clickedButton) {
                button.classList.remove('selected');
            }
        })
    })
})

const addBtn = document.querySelector('#newtask-btn');
const modal = document.querySelector('#mod');
const modForm = document.querySelector('#mod-tls');
const modInput = document.querySelector('#mod-tls input');


addBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

modForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!modForm.checkValidity()) {
        e.preventDefault();
    } else {
        let textValue = modInput.value;
        storeArray.push(textValue);
        localStorage.setItem('task', storeArray);

        const clone = template.firstElementChild.cloneNode(true);
        const p = clone.querySelector('p');
        p.textContent = textValue;
        tasksBox.prepend(clone);

        modInput.value = '';
        modal.classList.remove('active');
        ifNoTasks();
        deleteTask(allBins());
    };
});

const elTasks = document.querySelectorAll('.task')

const alltasksFilter = filters[0];
const notfinFilter = filters[1];
const finFilter = filters[2];

srchInp.addEventListener('keyup', (e) => {
    const filter = srchInp.value.toUpperCase();
    console.log(filter)
    elTasks.forEach(task => {
        const p = task.querySelector('p');
        if (p.textContent.toUpperCase().includes(filter)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    })
})