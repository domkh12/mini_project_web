"use strict";

const hero_img = document.querySelector("#hero-img");
const bar_left = document.querySelector("#bar-left");
const bar_mid = document.querySelector("#bar-mid");
const bar_right = document.querySelector("#bar-right");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img1_hero3 = document.querySelector("#img1-hero3");
const img2_hero3 = document.querySelector("#img2-hero3");
const img3_hero3 = document.querySelector("#img3-hero3");
const img_hero3 = document.querySelector("#img-hero3");
const title_hero3 = document.querySelector("#title-hero3");
const description_hero3 = document.querySelector('#description-hero3');

const classesToRemove = ["brightness-125", "outline-white", "scale-110", "outline"];
const classesToRemoveHover = ["hover:brightness-125", "hover:outline-white", "hover:scale-110", "hover:outline"];
function removeClasses() {
  const elements = [img1_hero3, img2_hero3, img3_hero3];
  elements.forEach(element => {
    classesToRemove.forEach(cls => element.classList.remove(cls));
  });
}

function removeClassesHover() {
  const elements = [img1_hero3, img2_hero3, img3_hero3];
  elements.forEach(element => {
    classesToRemoveHover.forEach(cls => element.classList.remove(cls));
  });
}

img1_hero3.addEventListener('click', () => {
  removeClasses();
  removeClassesHover();
  img_hero3.src = `../images/img41.jpg`;
  title_hero3.innerHTML = "Has All of Us Are Dead";
  description_hero3.innerHTML = "The series centers on a group of high school students in the fictional South Korean city of Hyosan, and their struggle to survive amidst a zombie outbreak. It is based on the Naver webtoon of the same name by Joo Dong-geun, which was published between 2009 and 2011.";
  img1_hero3.classList.add(...classesToRemove);
  img1_hero3.classList.add(...classesToRemoveHover);
});

img2_hero3.addEventListener('click', () => {
  removeClasses();
  removeClassesHover();
  img_hero3.src = `../images/img17.jpg`;
  title_hero3.innerHTML = "The Flash : Season 9";
  img2_hero3.classList.add(...classesToRemove);
  img2_hero3.classList.add(...classesToRemoveHover);
});

img3_hero3.addEventListener('click', () => {
  removeClasses();
  removeClassesHover();
  img_hero3.src = `../images/img40.jpg`;
  img_hero3.style.backgroundSize= `cover`;
  title_hero3.innerHTML = "Money Heist: Korea";
  description_hero3.innerHTML = "Thieves overtake the mint of a unified Korea. With hostages trapped inside, the police must stop them — as well as the shadowy mastermind behind it all. Watch all you want.";
  img3_hero3.classList.add(...classesToRemove);
  img3_hero3.classList.add(...classesToRemoveHover);
});

let arrImg = [
  "../images/img1.jpg",
  "../images/img2.jpg",
  "../images/img5.jpg",
  "../images/img4.jpg",
  "../images/img6.jpg",
];

let arrImgElements = [img1, img2, img3, img4, img5];

function changeImage(i) {
  hero_img.src = `${arrImg[i]}`;
  const classesToRemove = ["brightness-100", "outline-white", "scale-110", "outline"];

  // Reset all bars to bg-slate-500
  bar_left.classList.remove("bg-white");
  bar_mid.classList.remove("bg-white");
  bar_right.classList.remove("bg-white");
  bar_left.classList.add("bg-slate-500");
  bar_mid.classList.add("bg-slate-500");
  bar_right.classList.add("bg-slate-500");

  // Update bar colors based on current image index
  if (i === 0) {
    bar_left.classList.add("bg-white");
  } else if (i === arrImg.length - 1) {
    bar_right.classList.add("bg-white");
  } else {
    bar_mid.classList.add("bg-white");
  }    
  
  if (i === 0) {
    hero_img.classList.add("sm:object-right");
  } else {
    hero_img.classList.remove("sm:object-right");
  }

  // Reset the scale of all images
  arrImgElements.forEach(img => img.classList.remove(...classesToRemove));

  // Scale the image that matches the current background
  arrImgElements[i].classList.add("scale-110");
  arrImgElements[i].classList.add("brightness-100");
  arrImgElements[i].classList.add("outline-white");
  arrImgElements[i].classList.add("outline");  
}

function bgChange() {
  img2_hero3.classList.add('outline');
  img2_hero3.classList.add('outline-white');
  img2_hero3.classList.add('scale-110');
  img2_hero3.classList.add('brightness-125');

  let i = 0;
  changeImage(i);  // Immediately set the first image
  setInterval(() => {
    i = (i + 1) % arrImg.length;
    changeImage(i);
  }, 2500);
}

window.onload = bgChange;
