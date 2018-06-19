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


let sliderBtn = document.querySelectorAll(".slider__btn");
let sliderItem = document.querySelectorAll(".slider__slide");

for(let i=0; i<sliderItem.length; i++){
  
  sliderBtn[i].onclick = () =>{
    for(let j=0; j<sliderItem.length; j++){
      sliderBtn[j].classList.remove("active");
      sliderItem[j].classList.add("visually-hidden");
    }
    sliderBtn[i].classList.add("active");
    sliderItem[i].classList.remove("visually-hidden");
    
  }
}
