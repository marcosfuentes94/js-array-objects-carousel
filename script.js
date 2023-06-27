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

// OTTIENI IL RIFERIMENTO ALL'ELEMENTO CONTAINER
const container = document.getElementById('carousel-container');

// CICLA TRAMITE OGNI OGGETTO NELL'ARRAY "images"
images.forEach((item, index) => {
// CREAZIONE DEL DIV SLIDE
const slide = document.createElement('div');
slide.classList.add('slide');

// IMPOSTA IL PRIMO SLIDE COME ATTIVO
if (index === 0) {
    slide.classList.add('active');
}

// CREAZIONE DELL'ELEMENTO IMMAGINE
const image = document.createElement('img');
image.src = item.image;

// CREAZIONE DELL'ELEMENTO TITOLO
const title = document.createElement('h2');
title.textContent = item.title;

// CREAZIONE DELL'ELEMENTO DESCRIZIONE
const description = document.createElement('p');
description.textContent = item.text;

// AGGIUNGI IMMAGINE, TITOLO E DESCRIZIONE ALLO SLIDE
slide.appendChild(image);
slide.appendChild(title);
slide.appendChild(description);

// AGGIUNGI LO SLIDE AL CONTAINER
container.appendChild(slide);
});
