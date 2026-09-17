const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");

  if (i === 0) {
    dot.classList.add("dot_selected");
  }

  dotsContainer.appendChild(dot);
}

let dots = document.querySelectorAll(".dot");

let currentSlide = 0;

arrowRight.addEventListener("click", () => {
  dots[currentSlide].classList.remove("dot_selected");

  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  dots[currentSlide].classList.add("dot_selected");

  bannerImage.src =
    "./assets/images/slideshow/" + slides[currentSlide].image;

  bannerText.innerHTML = slides[currentSlide].tagLine;
   
});


arrowLeft.addEventListener("click", () => {
  dots[currentSlide].classList.remove("dot_selected");

  currentSlide--;

	if (currentSlide < 0) {
	currentSlide = slides.length - 1;
	}
	
	dots[currentSlide].classList.add("dot_selected");

  bannerImage.src =
    "./assets/images/slideshow/" + slides[currentSlide].image;

  bannerText.innerHTML = slides[currentSlide].tagLine;

  });