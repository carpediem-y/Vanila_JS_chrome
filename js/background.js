const images = [
"background1.jpg",
"background2.jpg",
"background3.jpg",
"background4.jpg",
"background5.jpg",
"background6.jpg",
"background7.jpg",
"background8.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

url = `/img/${chosenImage}`;


document.body.style.backgroundImage = `url(${url})`;
document.body.style.backgroundRepeat = "no-repeat";
