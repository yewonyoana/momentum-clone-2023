const body = document.querySelector("body");
const images = [
	"00.jpeg",
	"01.jpg",
	"02.jpeg",
	"03.jpeg",
	"04.jpeg",
	"05.png",
	"06.jpg",
	"07.jpeg",
	"10.jpeg",
	"11.jpg",
	"12.jpeg",
	"13.jpg",
	"14.jpg",
	"15.jpg",
	"16.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `imgs/${chosenImage}`;

// document.body.appendChild(bgImage);

function changeBackgroundImg() {
	body.style.background = `url(imgs/${chosenImage}) center/cover no-repeat`;
}

changeBackgroundImg();
