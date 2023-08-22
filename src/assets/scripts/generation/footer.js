import { GlobalVariables } from "../var";
import { DivElement, SvgElement, InputElement, ButtonElement, TaskTemplate, TextElement, FormElement } from "./elements";
const gv = new GlobalVariables();
gv.refresh();

// Footer //
const footer = document.createElement('footer');
document.body.appendChild(footer);

const fDelall = gv.delall.cloneNode(true);
fDelall.id = 'mobile-oda';

const fNewTask = gv.newt.cloneNode(true);
fNewTask.id = 'mobile-ntb';

const fTheme = gv.theme.cloneNode(true);
fTheme.id = 'mobile-ocm';

footer.append(fDelall, fNewTask, fTheme);