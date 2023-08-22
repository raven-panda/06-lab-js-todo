export class GlobalVariables {
    refresh() {
        this.app = document.querySelector('#app');
        this.component = document.querySelector('#component');
        this.tbox = document.querySelector('#tasks-box');
        this.newt = document.querySelector('#newtask-btn');
        this.modal = document.querySelector('#mod');
        this.template = document.querySelector('template');
        this.notask = document.querySelector('#notasks');
        this.tasks = document.querySelectorAll('.task');
        this.filters = document.querySelectorAll('.filter');
        this.delall = document.querySelector('#opt-da');
        this.theme = document.querySelector('#opt-cm');
    }
}