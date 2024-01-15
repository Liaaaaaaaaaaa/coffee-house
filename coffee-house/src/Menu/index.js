import "./menu.html";
import "./index.scss";

import Header from '../Header';
import MainMenu from './menu-main';
import Modal from './Modal';
import Footer from '../Footer';



const header = document.getElementById('header');
header.append(Header);

const menu = document.getElementById('menu-main');
menu.append(MainMenu);

const footer = document.getElementById('footer');
footer.append(Footer);

const modal = document.getElementById('modal');
modal.append(Modal);
// console.log(modal);

//------ Switch----catedories----Main-page----------

import Categories from './menu-main/products/products.json';

// console.log(Categories);


const coffeeCategory = Categories.filter(e => e.category === "coffee");
const teaCategory = Categories.filter(e => e.category === "tea");
const dessertCategory = Categories.filter(e => e.category === "dessert");

const switchingContainer = document.querySelector('.switching__container');
const massiveCardsProducts = document.querySelectorAll('.category');

const buttonRefresh = document.querySelector('.button-refresh');
console.log(buttonRefresh);


function changeCategory(m1, m2) {
  if (m1.length > m2.length) {
    cutMassive(m1, m2);
  } else {
    putInfoToCard(m1, m2);
  }
}

function cutMassive(m1, m2) {
  let m3 = Array.from(m1).slice(0, m2.length);
  for (let i = m3.length; i < m1.length; i++) {
    m1[i].style.display = "none";
    putInfoToCard(m3, m2)
  }
}

function putInfoToCard(massiveContainer, massiveNewItems) {
  buttonRefresh.style.display = 'none';
  for (let i = 0; i < massiveContainer.length; i++) {
    massiveContainer[i].querySelector('.category__picture').classList = "category__picture";

    if (massiveNewItems[0].category === 'coffee') {
      massiveContainer[i].querySelector('.category__picture').classList.add('coffee' + (i + 1));
    }
    if (massiveNewItems[0].category === 'tea') {
      massiveContainer[i].querySelector('.category__picture').classList.add('tea' + (i + 1));
    }
    if (massiveNewItems[0].category === 'dessert') {
      massiveContainer[i].querySelector('.category__picture').classList.add('dessert' + (i + 1));
    }
    massiveContainer[i].querySelector('.category__name').textContent = massiveNewItems[i].name;
    massiveContainer[i].querySelector('.category__description').textContent = massiveNewItems[i].description;
    massiveContainer[i].querySelector('.category__price').textContent = "$" + massiveNewItems[i].price;
    massiveContainer[i].style.display = "block";

    console.log(window.innerWidth <= 768 && i > 3);
    if (window.innerWidth <= 768 && i > 3) {
      massiveContainer[i].style.display = 'none';
      buttonRefresh.style.display = 'flex';
    }
  }
}


// window.addEventListener("load", function () {
//  console.log('ttttt')
// });

putInfoToCard(massiveCardsProducts, coffeeCategory);

function defineCategory(name, button) {
  if (name === "Tea") {
    changeCategory(massiveCardsProducts, teaCategory);
  }

  if (name === "Dessert") {
    putInfoToCard(massiveCardsProducts, dessertCategory);
  }
  if (name === "Coffee") {
    putInfoToCard(massiveCardsProducts, coffeeCategory);
  }

  button.classList.add("switching_active");
}

function switchingCategory(element) {
  Array.from(switchingContainer.children).forEach(e => e.classList.remove('switching_active'));

  try {
    let nameCategory = element.target.closest(".switching__item").lastChild.previousElementSibling.textContent;

    let putButtonCategory = element.target.closest(".switching__item");

    defineCategory(nameCategory, putButtonCategory);

  } catch (eror) {
    let nameCategory = element.lastChild.previousElementSibling.textContent;
    let putButtonCategory = element;

    defineCategory(nameCategory, putButtonCategory);

  }
};

switchingContainer.addEventListener("click", switchingCategory);

window.addEventListener('resize', function () {
  let switchingActive = document.querySelector('.switching_active');
  switchingCategory(switchingActive);
});



buttonRefresh.addEventListener('click', function () {
  Array.from(massiveCardsProducts).map(e => e.style.display = 'block');
  buttonRefresh.style.display = 'none';
});

//----------Modal-------------------------------

const modalWindow = document.querySelector('.modal');
const categoriesContainer = document.querySelector('.categories__container');
let modalPictureBackground = document.querySelector(".modal-picture_background");
let modalTitle = document.querySelector('.modal__title');
let modalText = document.querySelector('.modal__text');
const modalContainer = document.querySelector('.modal__container');
const modalButton = document.querySelector(".button__modal");
const body = document.querySelector("body");
let modalTotalPrice = document.querySelector(".modal-total__price");

function modalWindowOpen(elem) {
  if (elem.target.closest('.category')) {
    let nameElement = elem.target.closest('.category').children[1].children[0].textContent;
    let massiveElement = Categories.filter(e => e.name === nameElement);


    //------- change icons---------
    let modalElementContainer = document.querySelectorAll('.modal-element__container');

    for (let i = 3; i < modalElementContainer.length; i++) {
      modalElementContainer[i].children[1].textContent = massiveElement[0].additives[i - 3].name;
    }
    modalElementContainer[0].children[1].textContent = massiveElement[0].sizes.s.size;
    modalElementContainer[1].children[1].textContent = massiveElement[0].sizes.m.size;
    modalElementContainer[2].children[1].textContent = massiveElement[0].sizes.l.size;

    modalPictureBackground.classList.add(massiveElement[0].picture);
    modalTitle.textContent = massiveElement[0].name;
    modalText.textContent = massiveElement[0].description;

    modalTotalPrice.textContent = "$" + massiveElement[0].price;

    modalWindow.classList.toggle('active');
    body.classList.add("overflow-Y");


  }
}

categoriesContainer.addEventListener('click', modalWindowOpen);


function modalWindowClose(elem) {
  if (elem.target === modalButton) {
    modalWindow.classList.remove('active');
    body.classList.remove("overflow-Y");
    modalPictureBackground.classList = 'modal-picture_background';
  }

  if (!modalContainer.contains(elem.target)) {
    modalWindow.classList.toggle('active');
    body.classList.remove("overflow-Y");
    modalPictureBackground.classList = 'modal-picture_background';
  }
}

modalWindow.addEventListener("click", modalWindowClose);
modalButton.addEventListener("click", modalWindowClose);


const modalChooseElementSize = document.querySelectorAll(".modal-choose__elements")[0];
const modalChooseElementAdd = document.querySelectorAll(".modal-choose__elements")[1];

let totalPrice = document.querySelector(".modal-total__price");
let changeTotalPrice;

function activeChooseSize(elem) {
  Array.from(modalChooseElementSize.children).forEach(e => e.classList = "modal-element__container");
  Array.from(modalChooseElementSize.children).forEach(e => e.children[0].style.background = "#C1B6AD");

  elem.target.closest(".modal-element__container").classList.toggle("active_modal-element");


  let nameElement = elem.target.closest(".modal__container").children[1].children[0].children[0].textContent;
  let massiveElement = Categories.filter(e => e.name === nameElement);
  let chooseSize = elem.target.closest(".modal-element__container").children[0].textContent;

  let firstTotalPrice = massiveElement[0].price;


  if (chooseSize === "S") {
    changeTotalPrice = "$" + firstTotalPrice;
  }
  if (chooseSize === "M") {
    changeTotalPrice = "$" + (+firstTotalPrice + 0.5);
  }
  if (chooseSize === "L") {
    changeTotalPrice = "$" + (+firstTotalPrice + 1);
  }
  totalPrice.textContent = changeTotalPrice;

  console.log(elem)

}

modalChooseElementSize.addEventListener("click", activeChooseSize);
// activeChooseSize (elem);

function activeChooseAdd(elem) {
  elem.target.closest(".modal-element__container").classList.toggle("active_modal-element");
  let nameElement = elem.target.closest(".modal__container").children[1].children[0].children[0].textContent;
  let massiveElement = Categories.filter(e => e.name === nameElement);

  let numberAdd = elem.target.closest(".modal-element__container").children[0].textContent - 1;

  let priceAdd = massiveElement[0].additives[numberAdd]["add-price"];



  let sum;
  let firstTotalPrice = totalPrice.textContent.slice(1);
  let classlistLength = elem.target.closest(".modal-element__container").classList.length;

  if (classlistLength === 2) {
    sum = "$" + (+firstTotalPrice + +priceAdd);
  }
  if (classlistLength === 1) {
    sum = "$" + (+firstTotalPrice - +priceAdd);
  }

  totalPrice.textContent = sum;
}


modalChooseElementAdd.addEventListener("click", activeChooseAdd);

