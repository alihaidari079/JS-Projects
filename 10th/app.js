// // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// // pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// // slice extracts a section of a string without modifying original string
// //offsetTop - A Number, representing the top position of the element, in pixels

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();



const navtoggle = document.querySelector(".nav-toggle");
const linkscontainer = document.querySelector(".links-container");
const links = document.querySelector(".links")


navtoggle.addEventListener("click", function() {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linkscontainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linkscontainer.style.height = `${linksHeight}px`;
  } else {
    linkscontainer.style.height = 0;
  }
});




const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');



window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linkscontainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linkscontainer.style.height = 0;
  });
});