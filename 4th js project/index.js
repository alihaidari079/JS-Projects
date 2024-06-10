const navbutton = document.querySelector('.nav-button');
const links = document.querySelector('.links');


navbutton.addEventListener('click', function() {
  links.classList.toggle("show-links");
});