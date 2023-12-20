import "./menu.html";
import "./index.scss";


import Header from '../Header';
import MainMenu from './menu-main';
// console.log(MainMenu);
// import Footer from '../Footer';


const header = document.getElementById('header');
header.append(Header);

const menu = document.getElementById('menu-main');
menu.append(MainMenu);


// const footer = document.getElementById('footer');
// footer.append(Footer);
// console.log(footer)