import "./menu.html";
import "./index.scss";

import Header from '../Header';
import MainMenu from './menu-main';
console.log(MainMenu);
import Footer from '../Footer';


const header = document.getElementById('header');
header.append(Header);

const menu = document.getElementById('menu-main');
menu.append(MainMenu);

const footer = document.getElementById('footer');
footer.append(Footer);


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

