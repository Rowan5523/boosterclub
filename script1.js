// script1.js
const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let c = 0;
const slideWidth = images[0].clientWidth;

function updateSlidePosition() {
    carouselSlide.style.transform = `translateX(-${slideWidth * c}px)`;
}

function showNextSlide() {
    c = (c + 1) % images.length;
    updateSlidePosition();
}

function showPrevSlide() {
    c = (c - 1 + images.length) % images.length;
    updateSlidePosition();
}

nextBtn.addEventListener("click", showNextSlide);
prevBtn.addEventListener("click", showPrevSlide);

updateSlidePosition();
