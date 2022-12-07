// const images = document.querySelectorAll(".slider__line img");
const sliderline = document.querySelector(".slider__line");
const slide = document.querySelectorAll('.slide')
let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderline.style.width = width * slide.lendgth + "px";
  slide.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });

  rollSlider();
}


init();
window.addEventListener("resize", init);

document.querySelector(".slider-next").addEventListener("click", () => {
  count++;
  if (count >= slide.length) {
    count = 0;
  }

  rollSlider();
});

document.querySelector(".slider-prev").addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = slide.length - 1;
  }

  rollSlider();
});

function rollSlider() {
  sliderline.style.transform = "translate(-" + count * width + "px)";
}
