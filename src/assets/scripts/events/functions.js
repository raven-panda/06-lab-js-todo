const taskbox = document.querySelector('#tasks-box');
const notask = document.querySelector('#notasks');

export function storeData() {
    const html = document.querySelector('#tasks-box').innerHTML;
    localStorage.setItem('task', html)
}

export function instanceTemplate(data, id = '') {
    const template = document.querySelector('#task-temp');
    const instance = template.content.querySelector('.task').cloneNode(true);
    instance.id = id;
    const title = instance.querySelector('p');
    
    title.textContent = data;
    
    taskbox.prepend(instance);
}

export function notasks() {
    const tasks = document.querySelectorAll('#tasks-box .task');
    let i = 0;
    tasks.forEach(element => {
        if (element.style.display == 'none') i++;
    });
    console.log(i, tasks.length);
    if (i === tasks.length) {
        notask.classList.add('nochild');
    } else {
        notask.classList.remove('nochild');
    }
}
export function deleteTask() {
    const bins = document.querySelectorAll('#tasks-box .del-task');
    bins.forEach(bin => {
        bin.addEventListener('click', function () {
            let task = bin.parentElement.parentElement;
            task.remove();
            storeData();
            notasks();
        })
    })
}