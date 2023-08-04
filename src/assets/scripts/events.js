const filters = document.querySelectorAll('.filter');
const tasksBox = document.querySelector('#tasks-box');
const template = document.querySelector('#task-template');

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
const modal = document.querySelector('#mod')


addBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

// Displays if there is no tasks at load //
const noTasks = document.createElement('h1');
noTasks.id = 'notasks-title';
noTasks.innerText = 'No tasks to display. You can add a task by clicking the + button above.';
tasksBox.appendChild(noTasks);

if (tasksBox.firstChild == noTasks) {
    noTasks.classList.add('notasks');
} else {
    noTasks.classList.remove('notasks');
}

console.log(tasksBox.querySelector(".task"));

// const clone = template.firstElementChild.cloneNode(true);
// const p = clone.querySelector('p');
// p.textContent = 'lol';
// tasksBox.prepend(clone);