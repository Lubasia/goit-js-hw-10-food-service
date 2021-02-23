import cards from '../menu-create.hbs'
import menu from '../menu.json'

const menuCreate = menu(cards);
console.log(menuCreate)
const galleryEl = document.querySelector('.js-menu');
galleryEl.insertAdjacentHTML('afterbegin', menuCreate)

