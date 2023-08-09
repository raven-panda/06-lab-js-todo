import { GlobalVariables } from '../var';
import './dragndrop';

const gv = new GlobalVariables;

//=-=-=-=-=-New Task Button-=-=-=-=-=//
gv.newt.addEventListener('click', () => {
    gv.modal.classList.add('active')
})