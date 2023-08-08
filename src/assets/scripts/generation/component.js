import { GlobalVariables } from "../events/var";
const glVar = new GlobalVariables();

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
//           Creating Component            //
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

class Component {
    
}

const component = document.createElement('div');
    component.id = 'component';

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
//        Creating Search Container        //
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

const navBox = document.createElement('div');
    navBox.id = 'nav-box';




//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
//               Append all                //
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

glVar.app.append(component);