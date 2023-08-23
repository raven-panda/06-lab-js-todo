const delall = document.querySelector('#opt-da');
const newtask = document.querySelector('#newtask-btn')
const theme = document.querySelector('#opt-cm');

// Footer //
const footer = document.createElement('footer');
document.body.appendChild(footer);

const fDelall = delall.cloneNode(true);
fDelall.id = 'mobile-oda';

const fNewTask = newtask.cloneNode(true);
fNewTask.id = 'mobile-ntb';

const fTheme = theme.cloneNode(true);
fTheme.id = 'mobile-ocm';

footer.append(fDelall, fNewTask, fTheme);