//=-=-=-=-=-Imports-=-=-=-=-=//

import { GlobalVariables } from "../var";
import { DivElement, SvgElement } from "./elements";
const glVar = new GlobalVariables();

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
//           Creating Component            //
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

const component = new DivElement('component');
component.appendTo(glVar.app);

//=-=-=-=-=-Creating the Navbox-=-=-=-=-=//

const navBox = new DivElement('nav-box');
navBox.appendTo(component.element);

//=-=-=-=-=-Creating Elements of the Navbox-=-=-=-=-=//