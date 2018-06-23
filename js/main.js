// Добавляем доступность для меню
let menuItem = document.querySelectorAll(".navigation__inner");

for (let i = 0; i < menuItem.length; i++) {
  let menu = menuItem[i].querySelectorAll(".submenu__link");

  for (let j = 0; j < menu.length; j++) {
    menu[j].addEventListener("focus", () => {
      console.log(menu[j]);
      menuItem[i].style.opacity = "1";
      menuItem[i].style.visibility = "visible";
    })
    menu[j].addEventListener("blur", () => {
      menuItem[i].style.opacity = "";
      menuItem[i].style.visibility = "";
    })
  }
}


// Добавляем доступность для карточек товара
let catalogBtn = document.querySelectorAll(".catalog__btn");

for (let i = 0; i < catalogBtn.length; i++) {
  catalogBtn[i].addEventListener("focus", () => {
    catalogBtn[i].parentNode.style.opacity = "1";
  })
  catalogBtn[i].addEventListener("blur", () => {
    catalogBtn[i].parentNode.style.opacity = "";
  })
}

let catalogCompare = document.querySelectorAll(".catalog__compare");

for (let i = 0; i < catalogBtn.length; i++) {
  catalogCompare[i].addEventListener("focus", () => {
    catalogCompare[i].parentNode.style.opacity = "1";
  })
  catalogCompare[i].addEventListener("blur", () => {
    catalogCompare[i].parentNode.style.opacity = "";
  })
}


// Слайдер лучших товаров
let sliderBtn = document.querySelectorAll(".slider__btn");
let sliderItem = document.querySelectorAll(".slider__slide");

for (let i = 0; i < sliderItem.length; i++) {

  sliderBtn[i].onclick = () => {
    for (let j = 0; j < sliderItem.length; j++) {
      sliderBtn[j].classList.remove("active");
      sliderItem[j].classList.add("visually-hidden");
    }
    sliderBtn[i].classList.add("active");
    sliderItem[i].classList.remove("visually-hidden");

  }
}


// Слайдер услуг
let servicesBtn = document.querySelectorAll(".services__btn");
let servicesItem = document.querySelectorAll(".services__slide");

for (let i = 0; i < servicesItem.length; i++) {

  servicesBtn[i].onclick = () => {
    for (let j = 0; j < servicesItem.length; j++) {
      servicesBtn[j].classList.remove("active");
      servicesItem[j].classList.add("visually-hidden");
    }
    servicesBtn[i].classList.add("active");
    servicesItem[i].classList.remove("visually-hidden");

  }
}
