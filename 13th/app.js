const text = [
 `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eius inventore iure. Non ut similique possimus tempora saepe, rerum aspernatur id repellat quasi est a alias, cum recusandae quos obcaecati?`,
 `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.`,
 `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eius inventore iure. Non ut similique possimus tempora saepe, rerum aspernatur id repellat quasi est a alias, cum recusandae quos obcaecati?`,
 `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eius inventore iure. Non ut similique possimus tempora saepe, rerum aspernatur id repellat quasi est a alias, cum recusandae quos obcaecati?`,
 `
Imagine you're in a tech interview, and you get a tough question. Stay calm and confident with Tech Interview 101 - From DSA to System Design. This course is perfect for computer science enthusiasts. You'll learn all about data structures, algorithms, and system design with hands-on practice. Get the skills you need to succeed in any interview. Ready to land your dream job? Sign up today!`,
 `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eius inventore iure. Non ut similique possimus tempora saepe, rerum aspernatur id repellat quasi est a alias, cum recusandae quos obcaecati?`,
 `These are just a few examples of the many applications of algorithms. The use of algorithms is continually expanding as new technologies and fields emerge, making it a vital component of modern society.`,
 `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eius inventore iure. Non ut similique possimus tempora saepe, rerum aspernatur id repellat quasi est a alias, cum recusandae quos obcaecati?`,
 `Language Independent: Algorithm must be language-independent, i.e. it must be just plain instructions that can be implemented in any language, and yet the output will be the same, as expected.`,
]


const formbox = document.querySelector('.form-box');
const amount = document.getElementById('amount');
const loremtext = document.querySelector(".lorem-text");
formbox.addEventListener("submit", function(e) {
e.preventDefault();
const value = parseInt(amount.value);
const random = Math.floor(Math.random() * text.length);
console.log(random);

if(isNaN(value) || value <= 0 || value > text.length) {
  loremtext.innerHTML = `<p class="result">${text[random]}</p>`;
} else {
  let temptext = text.slice(0, value);
  temptext = temptext.map(function(item) {
    return `<p class="loremtext">${item}</p>`;
  })
  .join("");
  loremtext.innerHTML = temptext;
}
})
//  const formbox = document.querySelector(".form-box");
//  const amount = document.getElementById("amount");
//  const loremtext = document.querySelector(".lorem-text");
 
//  formbox.addEventListener('submit', function(e) {
// e.preventDefault();
//  });
  