import './styles.css';
import templateItem from './template/gallery-item.hbs';
import menuItems from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const galleryRef = document.querySelector('ul.js-menu');
const themeBtn = document.querySelector('#theme-switch-toggle');

const markupItems = templateItem(menuItems);
galleryRef.insertAdjacentHTML('beforeend', markupItems);

const addToStorage = theme => {
  if (theme === 'dark-theme') {
    themeBtn.checked = true;
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
    return;
  }
  themeBtn.checked = false;
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
};

const themeByStorage = () => {
  const themeStorage = JSON.parse(localStorage.getItem('theme'));
  if (themeStorage === Theme.DARK) {
    body.classList.add(Theme.DARK);
    addToStorage(Theme.DARK);
    return;
  }
  body.classList.add(Theme.LIGHT);
  addToStorage(Theme.LIGHT);
};

themeByStorage();

const handelChangeTheme = () => {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    addToStorage(Theme.DARK);
    return;
  }
  body.classList.replace(Theme.DARK, Theme.LIGHT);
  addToStorage(Theme.LIGHT);
};
themeBtn.addEventListener('change', handelChangeTheme);
