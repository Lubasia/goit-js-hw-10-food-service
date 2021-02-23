import cards from '../menu-create.hbs'
import menu from '../menu.json'

const menuCreate = cards(menu);
console.log(menuCreate)
const galleryEl = document.querySelector('.js-menu');
galleryEl.insertAdjacentHTML('afterbegin', menuCreate)
