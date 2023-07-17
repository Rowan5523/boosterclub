// script2.js
const image1 = document.getElementById('image4');
const image2 = document.getElementById('image5');

image1.classList.add('active');

const imageSources = ['sub.png', 'wrona.png'];
let currentIndex = 0;

function changeImage() {
    image1.classList.toggle('active');
    image2.classList.toggle('active');

    currentIndex = (currentIndex + 1) % imageSources.length;

    if (image1.classList.contains('active')) {
        image2.src = imageSources[currentIndex];
    } else {
        image1.src = imageSources[currentIndex];
    }
}

setInterval(changeImage, 5000);