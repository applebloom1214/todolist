const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const ranImage = images[Math.floor(Math.random() * images.length)];

const imgSrc = `img/${ranImage}`;

document.body.style.backgroundImage = `url(${imgSrc})`;