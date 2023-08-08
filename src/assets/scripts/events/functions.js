import { EventsVariables } from "./var";
const eventVar = new EventsVariables();

export function ifNoTasks() {
    eventVar.refresh();
    if (eventVar.tasksBox.firstChild == eventVar.noTasks) {
        eventVar.noTasks.classList.add('notasks');
    } else {
        eventVar.noTasks.classList.remove('notasks');
    };
}