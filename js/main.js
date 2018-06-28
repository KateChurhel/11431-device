// Добавляем доступность для меню
let menuItem = document.querySelectorAll(".navigation__inner");

for (let i = 0; i < menuItem.length; i++) {
  let menu = menuItem[i].querySelectorAll(".submenu__link");

  for (let j = 0; j < menu.length; j++) {
    menu[j].addEventListener("focus", function(i) {
      return function() {
        console.log(menu[j]);
        menuItem[i].style.opacity = "1";
        menuItem[i].style.visibility = "visible";
      }
    }(i));
    menu[j].addEventListener("blur", function(i) {
      return function() {
        menuItem[i].style.opacity = "";
        menuItem[i].style.visibility = "";
      }
    }(i));
  }
}


// Добавляем доступность для карточек товара
let catalogBtn = document.querySelectorAll(".catalog__btn");

for (let i = 0; i < catalogBtn.length; i++) {
  catalogBtn[i].addEventListener("focus", function() {
    this.parentNode.style.opacity = "1";
  })
  catalogBtn[i].addEventListener("blur", function() {
    this.parentNode.style.opacity = "";
  })
}

let catalogCompare = document.querySelectorAll(".catalog__compare");

for (let i = 0; i < catalogBtn.length; i++) {
  catalogCompare[i].addEventListener("focus", function() {
    this.parentNode.style.opacity = "1";
  })
  catalogCompare[i].addEventListener("blur", function() {
    this.parentNode.style.opacity = "";
  })
}



/**
 * Cлайдер
 * 
 * @param  {Array} btns        Массив элементов управления слайдером
 * @param  {Array} sliderItems Массив слайдов 
 */
function slider(btns, sliderItems) {
  for (let i = 0; i < sliderItems.length; i++) {

    btns[i].onclick = function(i) {
      return function() {
        for (let j = 0; j < sliderItems.length; j++) {
          btns[j].classList.remove("active");
          sliderItems[j].classList.add("visually-hidden");
        }
        btns[i].classList.add("active");
        sliderItems[i].classList.remove("visually-hidden");
      }
    }(i);
  }
}


// Слайдер лучших товаров
let sliderBtn = document.querySelectorAll(".slider__btn");
let sliderItem = document.querySelectorAll(".slider__slide");
slider(sliderBtn, sliderItem);


// Слайдер услуг
let servicesBtn = document.querySelectorAll(".services__btn");
let servicesItem = document.querySelectorAll(".services__slide");
slider(servicesBtn, servicesItem);




// Оживляем модальные окна
let modalWriteUs = document.querySelector(".modal-write");
let modalMap = document.querySelector(".modal-map");
let contactImage = document.querySelector(".contacts__image");
let contactBtn = document.querySelector(".contacts__btn");
let closeModalBtn = document.querySelectorAll(".madal__close");
let modalSubmitBtn = modalWriteUs.querySelector(".modal-write__btn");
let modalWriteUsInput = modalWriteUs.querySelectorAll("input[required]");

for (let i = 0; i < closeModalBtn.length; i++) {
  closeModalBtn[i].addEventListener("click", function(evt){
    evt.preventDefault();
    this.parentNode.classList.remove("modal-show");
    this.parentNode.classList.remove("modal-error");
  })
};

contactBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");
  modalWriteUs.querySelector("input").focus();
});

modalSubmitBtn.addEventListener("click", function(evt){
  let isValue = true;
  for (var i = 0; i < modalWriteUsInput.length; i++) {
    if(!modalWriteUsInput[i].value) isValue=false;
  }
  if(!isValue){
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-error");
   modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
    modalWriteUs.classList.add("modal-error");
    console.log("Error");
  }
});

contactImage.addEventListener("click", function(evt){
  evt.preventDefault();
  modalMap.classList.add("modal-show");
})












