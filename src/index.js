import './index.html';
import './style.scss';

import './assets/scripts/generation/header';
import './assets/scripts/generation/component';
import './assets/scripts/generation/footer';
import './assets/scripts/events/add';
import './assets/scripts/events/events';

// Load stored dark or light theme //
const storedTheme = localStorage.getItem('theme');
const parsedTheme = JSON.parse(storedTheme);
if (parsedTheme.theme === 'theme-b') {
    document.body.classList.add('theme-b');
};