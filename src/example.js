import Dragscrolles from '../dist/main.js';

const scrolls = document.querySelectorAll('.scroll');

scrolls.forEach((scroll) => {
  new Dragscrolles(scroll);
});
