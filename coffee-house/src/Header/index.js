
import Header from '../Header/js/header.js';


export default Header;



const burgerButton = document.querySelector('.burger-menu');
const burgerMenuNavContainer = document.querySelector('.burger-menu-nav__container');
const burgerMenuContainer = document.querySelector('.burger-menu__container');
const body = document.querySelector('body');
let headerWrapper = document.querySelector('.header__wrapper');
// console.log(headerWrapper);

function SwitchBurgerMenu() {
  if (headerWrapper.style.position = "relative") {
    headerWrapper.style.position = "static"
  } else {
    headerWrapper.style.position = "relative"
  };
  burgerMenuNavContainer.classList.toggle('burger-menu-nav__container_active');
  burgerMenuContainer.classList.toggle('burger-menu__container_active');
  body.classList.toggle("overflow-Y");
}


burgerButton.addEventListener('click', SwitchBurgerMenu);

const linksHeader = document.querySelector('header').querySelectorAll('a');
console.log(linksHeader);


linksHeader.forEach(e => e.addEventListener('click', function () {
  if (window.innerWidth <= 768) {
    SwitchBurgerMenu();
  }
}));



