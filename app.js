//  const btn = document.querySelector('.btn');
//  const color = document.querySelector('.random-color');
//  const mainSection = document.querySelector('.main');
//  btn.addEventListener('click', function() {
//   const randomNumber = getRandomNumber();
//   mainSection.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
//   function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
//   };
//  });
// const images = [
//   '/features/gallery-2.jpg',
//   '/features/gallery-4.jpg',
//   '/features/gallery-5.jpg',
//   '/features/gallery-6.jpg',
// ];

// console.log(window.location.origin);
// const btn = document.querySelector('.btn');
// const color = document.querySelector('.color');
// const mainSection = document.querySelector('.main-section');
// btn.addEventListener('click', function () {
//   const randomNumber = getRandomNumber();
//   mainSection.style.backgroundImage =
//     'window.location.origin' + images[randomNumber];
//   color.textContent = 'window.location.origin' + images[randomNumber];
//   function getRandomNumber() {
//     return Math.floor(Math.random() * images.length);
//   }
// });
const images = [
  '/features/gallery-2.jpg',
  '/features/gallery-4.jpg',
  '/features/gallery-5.jpg',
  '/features/gallery-6.jpg',
];

console.log(window.location.origin);

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const mainSection = document.querySelector('.main-section');

btn.addEventListener('click', function() {
  const randomNumber = getRandomNumber();
  mainSection.style.backgroundImage = `url(${images[randomNumber]})`;
  color.textContent = images[randomNumber];
  function getRandomNumber() {
    return Math.floor(Math.random() * images.length);
  }
});