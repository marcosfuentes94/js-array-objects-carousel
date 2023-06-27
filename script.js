const images = [
{
image: 'img/01.webp',
title: "Marvel's Spiderman Miles Morale",
text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
},
{
image: 'img/02.webp',
title: 'Ratchet & Clank: Rift Apart',
text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
},
{
image: 'img/03.webp',
title: 'Fortnite',
text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts, and chaos.',
},
{
image: 'img/04.webp',
title: 'Stray',
text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
},
{
image: 'img/05.webp',
title: "Marvel's Avengers",
text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
},
];

const container = document.getElementById('carousel-container');
const thumbnailsContainer = document.getElementById('thumbnails-container');
let activeIndex = 0;
let autoplayInterval;

// FUNZIONE PER CREARE GLI SLIDER PER OGNI IMMAGINE
function createSlides() {
container.innerHTML = ''; // RIMUOVI TUTTI GLI SLIDER ESISTENTI
thumbnailsContainer.innerHTML = ''; // RIMUOVI TUTTE LE MINIATURE ESISTENTI

images.forEach((image, index) => {
const slide = document.createElement('div');
slide.classList.add('item');

const imageElement = document.createElement('img');
imageElement.src = image.image;

const textContainer = document.createElement('div');
textContainer.classList.add('text');

const titleElement = document.createElement('h2');
titleElement.textContent = image.title;

const textElement = document.createElement('p');
textElement.textContent = image.text;

textContainer.appendChild(titleElement);
textContainer.appendChild(textElement);

slide.appendChild(imageElement);
slide.appendChild(textContainer);

if (index === activeIndex) {
    slide.classList.add('active');
}

// AGGIUNGI MINIATURA
const thumbnail = document.createElement('img');
thumbnail.src = image.image;
thumbnail.classList.add('thumbnail');
thumbnail.addEventListener('click', () => {
    activeIndex = index;
    resetAutoplayInterval();
    populateCarousel();
});

thumbnailsContainer.appendChild(thumbnail);
container.appendChild(slide);
});
}

// FUNZIONE PER POPOLARE IL CAROSELLO CON L'IMMAGINE, IL TITOLO E IL TESTO DELL'IMMAGINE ATTIVA
function populateCarousel() {
const slides = container.getElementsByClassName('item');

Array.from(slides).forEach((slide, index) => {
if (index === activeIndex) {
    slide.classList.add('active');
} else {
    slide.classList.remove('active');
}
});
}

// FUNZIONE PER GESTIRE IL CLICK DELL'UTENTE SULLE FRECCE
function handleArrowClick(direction) {
if (direction === 'prev') {
activeIndex = (activeIndex - 1 + images.length) % images.length;
} else if (direction === 'next') {
activeIndex = (activeIndex + 1) % images.length;
}

resetAutoplayInterval();
populateCarousel();
}

// FUNZIONE AUTOPLAY
function resetAutoplayInterval() {
clearInterval(autoplayInterval);
autoplayInterval = setInterval(() => {
activeIndex = (activeIndex + 1) % images.length;
populateCarousel();
}, 3000);
}

const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const reverseButton = document.getElementById('reverse-button');

prevArrow.addEventListener('click', () => {
handleArrowClick('prev');
});

nextArrow.addEventListener('click', () => {
handleArrowClick('next');
});

startButton.addEventListener('click', () => {
resetAutoplayInterval();
});

stopButton.addEventListener('click', () => {
clearInterval(autoplayInterval);
});

reverseButton.addEventListener('click', () => {
// INVERTI L'ARRAY DELLE IMMAGINI E CALCOLA L'INDICE DELL'IMMAGINE ATTIVA
images.reverse();
activeIndex = images.length - 1 - activeIndex;
createSlides();
resetAutoplayInterval();
populateCarousel();
});

// POPOLA INIZIALMENTE IL CAROSELLO CON GLI SLIDER, LE MINIATURE E L'IMMAGINE, IL TITOLO E IL TESTO DEL PRIMO ELEMENTO NELL'ARRAY
createSlides();
resetAutoplayInterval();
populateCarousel();