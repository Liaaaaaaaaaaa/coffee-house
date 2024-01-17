
import './index.html';
import './index.scss';


import Header from '../Header/js/header.js';
import Enjoy from '../Home/enjoy';
import Choose from '../Home/choose';
import Resource from './resource';
import Download from './download';
import Footer from '../Footer';


const header = document.getElementById('header');
header.append(Header);

const root = document.getElementById('root');
// console.log(root);

if (root) {
  root.append(Enjoy);
  root.append(Choose);
  root.append(Resource);
  root.append(Download);
}


const footer = document.getElementById('footer');
footer.append(Footer);
// console.log(footer);

//------------------Slader------------------------------------
const slidesContainer = document.querySelector('.slides__container');

const switchRight = document.querySelector('.switch-right');
let rightPosition = 0;

const controlLine = document.querySelectorAll('.control__line');
let numberControlLine = 0;

function rightSwitchSlader() {
  if (rightPosition < 200) {
    rightPosition = rightPosition + 100;
  } else {
    rightPosition = 0;
  }
  slidesContainer.style.right = rightPosition + '%';
  controlLine[numberControlLine].classList.remove("control_active");
  // controlLine[numberControlLine + 1].classList.add("control_active");
  if (numberControlLine < 2) {
    controlLine[numberControlLine + 1].classList.add("control_active");
    numberControlLine += 1
  } else {
    controlLine[numberControlLine - 2].classList.add("control_active");
    numberControlLine = 0;
  }
};

if (root) {
  switchRight.addEventListener("click", rightSwitchSlader);
}

const switchLeft = document.querySelector('.switch-left');
// let leftPosition = 0;


function leftSwitchSlader() {
  if (rightPosition > 0) {
    rightPosition = rightPosition - 100;
  } else {
    rightPosition = 200;
  }
  slidesContainer.style.right = rightPosition + '%';
  controlLine[numberControlLine].classList.remove("control_active");
  // controlLine[numberControlLine + 1].classList.add("control_active");
  if (numberControlLine > 0) {
    controlLine[numberControlLine - 1].classList.add("control_active");
    numberControlLine -= 1
  } else {
    controlLine[controlLine.length - 1].classList.add("control_active");
    numberControlLine = controlLine.length - 1;
  }
};

if (root) {
  switchLeft.addEventListener("click", leftSwitchSlader);
}

setInterval(rightSwitchSlader, 5000);