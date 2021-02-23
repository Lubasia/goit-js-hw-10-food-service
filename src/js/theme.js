const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const elems = {
  body: document.querySelector('body'),
  menuList: document.querySelector('.menu'),
  switchToggle: document.querySelector('#theme-switch-toggle'),
};

elems.switchToggle.addEventListener('change', checkedTheme);

removeTheme();

function checkedTheme() {
  if (elems.switchToggle.checked) {
    elems.body.classList.remove(Theme.LIGHT);
    elems.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK)
  } else {
    elems.body.classList.remove(Theme.DARK);
    elems.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT)
  }
}

function removeTheme() {
  if (localStorage.getItem('theme') !== Theme.LIGHT) {
    elems.body.classList.add(Theme.DARK);
    elems.switchToggle.checked = true;
  } 
}
