//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
//              Creating App               //
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
const app = document.querySelector('#app');

const component = document.createElement('div');
component.id = 'component';

app.appendChild(component);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
//        Creating Search Container        //
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

const navBox = document.createElement('div');
navBox.id = 'nav-box';
component.appendChild(navBox);

//     Creating Search Box and Logos      //
const logo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
logo.classList.add('logo-note');
logo.setAttribute('width', '103');
logo.setAttribute('height', '103');
logo.setAttribute('viewBox', '0 0 103 103');
logo.innerHTML = '<g clip-path="url(#clip0_76_9)"><path d="M60.9953 7.56406C58.7824 8.14747 56.7506 9.87754 55.7648 12.0301C55.3424 12.9555 55.2217 13.559 55.1613 15.108L55.0809 17.0191L50.0113 18.367C47.2352 19.1113 44.8412 19.7148 44.6803 19.7148C44.5193 19.7148 38.6652 18.1658 31.6443 16.2949C24.6234 14.4039 18.7492 12.875 18.5883 12.875C18.025 12.875 17.1801 13.4383 16.9387 13.9814C16.6369 14.6252 0 76.6867 0 77.1494C0 77.8736 0.603516 78.618 1.44844 78.9399C1.93125 79.1209 9.77695 81.2533 18.9102 83.6875C28.0434 86.1217 35.708 88.1938 35.9293 88.2943C36.2109 88.415 36.4121 88.7369 36.5127 89.2399C36.8547 91.1108 37.6594 92.1367 38.7658 92.1367C38.967 92.1367 40.3752 91.7947 41.9242 91.3723L44.7004 90.6078L53.1898 92.8811C64.8578 96.0193 64.2141 95.8785 64.9584 95.5567C65.3205 95.4158 65.7229 95.0537 65.8637 94.7721C66.0246 94.4904 66.7488 91.9959 67.4932 89.2197C68.2375 86.4637 68.841 84.1703 68.8611 84.1703C68.8812 84.1502 76.224 82.1586 85.1963 79.7647C94.1484 77.3707 101.713 75.2785 101.994 75.1377C102.517 74.8561 103 74.0715 103 73.4881C103 72.965 86.3027 10.8432 86.001 10.2799C85.7193 9.71661 84.9348 9.25391 84.3313 9.25391C84.1502 9.25391 81.032 10.0586 77.3908 11.0443L70.7924 12.8147L70.4303 11.9898C68.8611 8.44923 64.7773 6.53809 60.9953 7.56406ZM64.6768 11.6479C66.0447 12.2514 67.1914 13.9211 67.1914 15.2891C67.1914 16.0334 66.7086 17.1801 66.1252 17.8439C63.6307 20.6805 59.1445 19.051 59.1445 15.2891C59.1445 12.3721 62.0615 10.4408 64.6768 11.6479ZM90.7285 42.8898C95.8182 61.9207 98.4334 71.9592 98.2926 72.0397C98.1719 72.1201 93.1023 73.4881 87.0068 75.1176C80.9314 76.7471 67.9357 80.2274 58.1387 82.8627C48.3416 85.4981 40.3148 87.6104 40.2746 87.5902C40.2344 87.5701 36.6938 74.4537 32.4088 58.4606C25.8707 34.0785 24.6637 29.351 24.9252 29.2705C26.3133 28.848 56.8713 20.7207 57.0725 20.7207C57.5553 20.7207 57.334 21.2438 55.624 24.2211C53.6928 27.5807 53.5117 28.3049 54.417 29.2303C55.0406 29.8338 55.6643 29.9746 56.5494 29.693C57.1529 29.4918 57.4547 29.0895 59.0439 26.3133L60.8545 23.1348L62.2828 23.2555C66.085 23.5975 69.525 21.3846 70.732 17.8439C70.9533 17.1801 71.1746 16.8582 71.5166 16.7777C71.758 16.7174 74.3934 16.0133 77.3707 15.2086C80.348 14.4039 82.8225 13.7803 82.8627 13.8004C82.9029 13.8406 86.4436 26.9369 90.7285 42.8898ZM36.6133 21.7869C36.9955 21.8674 36.3316 22.0686 28.1641 24.2412C24.5631 25.2068 21.4047 26.1121 21.1029 26.2529C20.6 26.5145 20.1172 27.299 20.1172 27.8623C20.1172 28.0031 23.4768 40.6367 27.5605 55.9459C31.6645 71.235 34.9838 83.768 34.9637 83.7881C34.9234 83.8082 31.423 82.8828 27.1582 81.7361C22.8934 80.5895 16.1541 78.7789 12.1709 77.7127C8.1877 76.6666 4.82812 75.7211 4.70742 75.6608C4.5666 75.5803 7.22207 65.401 12.2916 46.4707C16.5967 30.4775 20.0971 17.4014 20.1172 17.3812C20.1172 17.3812 23.7584 18.3469 28.2244 19.5338C32.6703 20.7408 36.4523 21.7467 36.6133 21.7869ZM63.5703 88.2943C63.1277 89.8836 62.7455 91.2113 62.7254 91.2315C62.6047 91.3119 52.9082 88.6363 52.9082 88.5358C52.9082 88.4352 64.2141 85.317 64.3147 85.3774C64.3348 85.3975 63.9928 86.7051 63.5703 88.2943Z" fill="#E1E1E1"/><path d="M58.4606 39.5303C36.6536 45.4045 37.7198 45.0223 37.7198 46.692C37.7198 47.376 37.8405 47.6174 38.3836 48.1002C38.7457 48.4221 39.2286 48.6836 39.4901 48.6836C39.7315 48.6836 48.8446 46.2896 59.7481 43.3727C77.6725 38.5646 79.5836 38.0215 80.0061 37.5387C80.509 36.9553 80.6297 35.8689 80.2676 35.185C80.0262 34.7424 79.0405 34.1992 78.5174 34.2193C78.3162 34.2193 69.2836 36.6133 58.4606 39.5303Z" fill="#E1E1E1"/><path d="M60.6534 48.3014C42.4473 53.1898 41.0995 53.5721 40.5965 54.1354C39.812 54.9602 39.8321 55.9459 40.6166 56.7506C41.0592 57.173 41.4012 57.334 41.9243 57.334C42.3065 57.334 46.1489 56.3885 50.4338 55.2418C54.7188 54.0951 63.5301 51.7213 70.0079 49.9912C80.9315 47.0943 81.8167 46.8127 82.3397 46.2494C82.9432 45.5855 83.0237 44.9217 82.5811 44.0566C82.1989 43.3324 81.6959 43.0508 80.8309 43.0709C80.4688 43.0709 71.3959 45.4246 60.6534 48.3014Z" fill="#E1E1E1"/><path d="M63.1076 57.0121C52.3047 59.9291 43.2922 62.4438 43.1111 62.5846C42.9301 62.7455 42.6685 63.1479 42.5277 63.51C42.0851 64.5561 42.749 65.8436 43.8756 66.085C44.5797 66.2459 83.5265 55.8856 84.291 55.3424C85.8199 54.2561 85.2969 52.0231 83.4662 51.8018C83.0035 51.7414 76.5056 53.4111 63.1076 57.0121Z" fill="#E1E1E1"/><path d="M55.5234 68.4387C48.5629 70.3096 45.6459 71.1746 45.324 71.4764C44.7004 72.0396 44.5394 73.0254 44.9418 73.7898C45.324 74.5342 45.8269 74.8359 46.6518 74.8359C47.2955 74.8359 66.608 69.7061 67.2518 69.3641C67.8754 69.0422 68.2576 67.8754 67.9961 67.0707C67.6943 66.1855 67.0908 65.7832 66.085 65.8033C65.6424 65.8033 60.8947 66.9902 55.5234 68.4387Z" fill="#E1E1E1"/></g><defs><clipPath id="clip0_76_9"><rect width="103" height="103" fill="white"/></clipPath></defs>';
navBox.appendChild(logo);

const srchTools = document.createElement('div');
srchTools.id = 'srch-tools';
navBox.appendChild(srchTools);

//     Creating Search Bar     //

const srchBar = document.createElement('div');
srchBar.id = 'srch-bar';
srchTools.appendChild(srchBar);

const input = document.createElement('input');
input.placeholder = 'Search for a task...'
srchBar.appendChild(input);

const button = document.createElement('button');
button.id = 'searchtask';
srchBar.appendChild(button);

const newTaskBtn = button.cloneNode();
newTaskBtn.id = 'newtask-btn';
srchBar.appendChild(newTaskBtn);

//-----------------------------------------//
//     Creating Search Filters     //

const filters = document.createElement('div');
filters.id = 'filterbox';
srchTools.appendChild(filters)

const filterBtn = button.cloneNode();
filterBtn.removeAttribute('id');
filterBtn.classList.add('filter');
filters.append(filterBtn, filterBtn.cloneNode(), filterBtn.cloneNode());

// Buttons Text //
const alltasksFilter = document.querySelector('.filter:nth-child(1)');
alltasksFilter.innerHTML = 'All Tasks <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_103_478)"><path d="M1.66784 0.0114956C1.58017 0.0352087 1.59239 0.0237122 0.817034 0.796911C0.411032 1.20291 0.0689844 1.54855 0.057487 1.5658C-0.0100602 1.6664 -0.0165275 1.80365 0.0409595 1.90425C0.0524569 1.92438 0.545408 2.42307 1.38975 3.26742L2.71985 4.59896L1.38616 5.93337C0.30037 7.01988 0.0495825 7.27498 0.036648 7.303C0.0158089 7.34899 0 7.41223 0 7.44816C0 7.49055 0.0194019 7.56385 0.0409595 7.60553C0.0689844 7.6587 1.53921 9.12893 1.59239 9.15696C1.69084 9.20869 1.8015 9.21013 1.89923 9.16127C1.92007 9.15121 2.33828 8.7373 3.26382 7.81248L4.59896 6.47806L5.92978 7.80817C6.77484 8.65251 7.27354 9.14546 7.29366 9.15696C7.40073 9.21876 7.54014 9.20726 7.64361 9.12965C7.66661 9.11312 8.01225 8.77108 8.41178 8.37082C8.9615 7.81895 9.14259 7.63355 9.15696 7.60553C9.20942 7.50421 9.21013 7.38636 9.15696 7.29366C9.14546 7.27354 8.64748 6.76981 7.80817 5.92978L6.47807 4.59896L7.80817 3.26742C8.64748 2.4281 9.14546 1.92438 9.15696 1.90425C9.21013 1.81156 9.20942 1.69371 9.15696 1.59239C9.14259 1.56436 8.9615 1.37897 8.41178 0.827092C8.01225 0.426839 7.66661 0.0847912 7.64361 0.068264C7.54014 -0.00934315 7.40073 -0.0208406 7.29366 0.0409575C7.27354 0.0524549 6.77484 0.545406 5.92978 1.38975L4.59896 2.71985L3.26382 1.38543C2.33828 0.460613 1.92007 0.0467062 1.89923 0.0366459C1.82737 0.000717163 1.74186 -0.00862503 1.66784 0.0114956Z" fill="black"/></g><path d="M17.7651 9.45867C17.5898 9.2827 17.3023 9.2827 17.127 9.45867L11.8188 14.7655L9.08517 12.0131C8.90984 11.8365 8.62429 11.8365 8.44768 12.0131L7.48983 12.9703C7.31451 13.145 7.31451 13.4325 7.48983 13.6085L11.4972 17.6423C11.6725 17.817 11.9581 17.817 12.1353 17.6423L18.7223 11.0547C18.9002 10.8787 18.9002 10.5906 18.7223 10.4139L17.7651 9.45867Z" fill="black"/><defs><clipPath id="clip0_103_478"><rect width="9.19792" height="9.19792" fill="white"/></clipPath></defs></svg>'
alltasksFilter.classList.add('selected');

const notfinFilter = document.querySelector('.filter:nth-child(2)');
notfinFilter.innerHTML = 'Not finished <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.72032 0.0170012C2.57733 0.0556822 2.59726 0.0369282 1.33262 1.29816C0.670411 1.96042 0.112516 2.52422 0.0937637 2.55235C-0.0164087 2.71645 -0.0269571 2.94033 0.0668067 3.10443C0.0855594 3.13725 0.889583 3.95072 2.26674 5.32799L4.4362 7.49998L2.26088 9.67665C0.489915 11.4489 0.0808712 11.865 0.0597744 11.9108C0.025785 11.9858 0 12.0889 0 12.1475C0 12.2167 0.0316453 12.3362 0.0668067 12.4042C0.112516 12.491 2.51052 14.8892 2.59726 14.9349C2.75783 15.0193 2.93832 15.0216 3.09772 14.9419C3.13171 14.9255 3.81384 14.2504 5.32344 12.7418L7.5011 10.5651L9.67173 12.7348C11.0501 14.112 11.8635 14.9161 11.8963 14.9349C12.0709 15.0357 12.2983 15.0169 12.4671 14.8904C12.5046 14.8634 13.0683 14.3055 13.72 13.6526C14.6166 12.7524 14.9119 12.4499 14.9354 12.4042C15.0209 12.239 15.0221 12.0467 14.9354 11.8955C14.9166 11.8627 14.1044 11.041 12.7355 9.67079L10.566 7.49998L12.7355 5.32799C14.1044 3.95893 14.9166 3.13725 14.9354 3.10443C15.0221 2.95323 15.0209 2.76099 14.9354 2.59572C14.9119 2.55001 14.6166 2.24759 13.72 1.34739C13.0683 0.694502 12.5046 0.13656 12.4671 0.109601C12.2983 -0.0169907 12.0709 -0.0357447 11.8963 0.0650597C11.8635 0.0838137 11.0501 0.887905 9.67173 2.26518L7.5011 4.43482L5.32344 2.25814C3.81384 0.749593 3.13171 0.0744362 3.09772 0.0580263C2.98051 -0.000580788 2.84104 -0.0158186 2.72032 0.0170012Z" fill="black"/></svg>'

const finFilter = document.querySelector('.filter:nth-child(3)');
finFilter.innerHTML = 'Finished <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0813 0.234375C18.7598 -0.078125 18.2327 -0.078125 17.9112 0.234375L8.17853 9.6586L3.16623 4.77078C2.84476 4.45713 2.32119 4.45713 1.99736 4.77078L0.241101 6.47064C-0.0803671 6.78085 -0.0803671 7.29138 0.241101 7.60388L7.58878 14.7673C7.91025 15.0776 8.43381 15.0776 8.75883 14.7673L20.8363 3.06862C21.1625 2.75612 21.1625 2.24445 20.8363 1.9308L19.0813 0.234375Z" fill="black"/></svg>'

//-----------------------------------------//
navBox.appendChild(logo.cloneNode(true));