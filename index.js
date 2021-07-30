let buybtn = document.getElementsByClassName("place-buy-btn");
let modal = document.getElementsByClassName("modal")[0];
let body = document.querySelector("body");
let menu = document.getElementsByClassName("menu-bars")[0];
let slider = document.querySelector(".slider-contains");
let prev = document.querySelector(".prev");
let screenSlider = document.getElementsByClassName("myCarousel")[0];
let btnNext = document.getElementsByClassName("next")[0];
console.log(slider.children);
let size = screenSlider.clientWidth;
let counter = 1;

slider.style.transform = "translateX(" + -size * counter + "px)";

function buy() {
  for (let i = 0; i < buybtn.length; i++) {
    buybtn[i].addEventListener("click", function () {
      modal.classList.add("in");
      body.classList.add("modal-open");
    });
  }
}
function closemodal() {
  let close = modal.getElementsByClassName("modal-close")[0];
  close.onclick = function (e) {
    modal.classList.remove("in");
    body.classList.remove("modal-open");
  };
}

function menubars() {
  activeMenu = true;
  menu.onclick = function (e) {
    let header = e.target.parentElement.parentElement;
    if (activeMenu) {
      header.style.height = "auto";
      activeMenu = false;
    } else {
      header.style.height = "46px";
      activeMenu = true;
    }
  };
}

function nextImg() {
  btnNext.onclick = function () {
    if (counter >= slider.children.length - 1) return;
    slider.style.transition = "transform 0.4s ease-in-out";

    counter++;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  };
}

nextImg();
function prevImg() {
  prev.onclick = function () {
    if (counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  };
}
slider.addEventListener("transitionend", function () {
  if (slider.children[counter].id === "lastClone") {
    slider.style.transition = "none";
    counter = slider.children.length - 2;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (slider.children[counter].id === "firstClone") {
    slider.style.transition = "none";
    counter = slider.children.length - counter;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
});
function Timeoutnext() {
  setTimeout(function autonextImg() {
    slider.style.transition = "transform 0.4s ease-in-out";

    counter++;
    slider.style.transform = "translateX(" + -size * counter + "px)";
    setTimeout(autonextImg, 2000);
  }, 2000);
}
Timeoutnext();
prevImg();
closemodal();
buy();

menubars();
