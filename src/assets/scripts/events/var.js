export class EventsVariables {
    srchInp = document.querySelector('#srch-bar input');
    filters = document.querySelectorAll('.filter');
    tasksBox = document.querySelector('#tasks-box');
    template = document.querySelector('#task-template');

    addBtn = document.querySelector('#newtask-btn');
    modal = document.querySelector('#mod');
    modForm = document.querySelector('#mod-tls');
    modInput = document.querySelector('#mod-tls input');

    elTasks = document.querySelectorAll('.task');
    noTasks = document.querySelector('#notasks-title');

    refresh() {
        this.elTasks = document.querySelectorAll('#component .task');
        this.noTasks = document.querySelector('#notasks-title');
    }

}

export class CompVariables {
    app = document.querySelector('#app');
}