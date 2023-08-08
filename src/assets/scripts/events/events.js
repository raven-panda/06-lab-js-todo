import { EventsVariables } from "./var";
const eventVar = new EventsVariables();

// Fetch the local storage //
let storeValue = localStorage.getItem('task');
let storeArray = [];

if (storeValue != null) {
    storeArray = storeValue.split(/\,(?!\s)/);

    let tasks = storeArray;

    tasks.forEach(element => {
        const clone = eventVar.template.firstElementChild.cloneNode(true);
        const p = clone.querySelector('p');
        p.textContent = element;
        eventVar.tasksBox.prepend(clone);
    })
}

// Displays if there is no tasks at load //
const noTasks = document.createElement('h1');
    noTasks.id = 'notasks-title';
    noTasks.innerText = 'No tasks to display. You can add a task by clicking the + button above.';
eventVar.tasksBox.appendChild(noTasks);

function ifNoTasks() {
    eventVar.refresh();
    if (eventVar.tasksBox.firstChild == eventVar.noTasks) {
        eventVar.noTasks.classList.add('notasks');
    } else {
        eventVar.noTasks.classList.remove('notasks');
    };
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

eventVar.filters.forEach((filter) => {
    filter.addEventListener('click', (e) => {
        const clickedButton = e.target;

        clickedButton.classList.add('selected');
    
        eventVar.filters.forEach((button) => {
            if (button != clickedButton) {
                button.classList.remove('selected');
            }
        })
    })
})

const instTasks = [];
eventVar.elTasks.forEach(e => {
    instTasks.push(e);
})

function taskNotFound() {
    instTasks.every(e => {
        if (e.style.display == 'none') {
            eventVar.noTasks.classList.add('notasks');
        } else {
            eventVar.noTasks.classList.remove('notasks');
        }
    });
};


eventVar.srchInp.addEventListener('keyup', () => {
    eventVar.refresh();
    const filter = eventVar.srchInp.value.toUpperCase();
    console.log(filter);
    console.log(eventVar.elTasks)
    eventVar.elTasks.forEach(task => {
        const p = task.querySelector('p');
        if (p.textContent.toUpperCase().includes(filter)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
            
        }
    })
    taskNotFound();
})

eventVar.addBtn.addEventListener('click', () => {
    eventVar.modal.classList.add('active');
});

eventVar.modForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!eventVar.modForm.checkValidity()) {
        e.preventDefault();
    } else {
        let textValue = eventVar.modInput.value;
        storeArray.push(textValue);
        localStorage.setItem('task', storeArray);

        const clone = eventVar.template.firstElementChild.cloneNode(true);
        const p = clone.querySelector('p');
        p.textContent = textValue;
        eventVar.tasksBox.prepend(clone);

        eventVar.modInput.value = '';
        eventVar.modal.classList.remove('active');
        ifNoTasks();
        deleteTask(allBins());
    };
});