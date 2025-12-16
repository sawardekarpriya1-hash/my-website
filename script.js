const images = [
  "images/slide1.png",
  "images/slide2.png",
  "images/slide3.png",
  "images/slide4.png",
  "images/slide5.png",
  "images/slide6.png",
  "images/slide7.png",
  "images/slide8.png",
  "images/slide9.png"
];

let current = 0;
const slide = document.getElementById("slide");

document.addEventListener("click", (e) => {
  // Left side = previous, right side = next
  if (e.clientX < window.innerWidth / 2) {
    current--;
  } else {
    current++;
  }

  // Loop around
  if (current < 0) current = images.length - 1;
  if (current >= images.length) current = 0;

  slide.src = images[current];
});
