
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const elems = {
    body: document.querySelector('body'),
    switch: document.querySelector('#theme-switch-toggle')
};

elems.switch.addEventListener('change', handleCheckbox);
