
const reviews = [

{
id:1,
name: 'Ali Haidari',
job: 'Teacher',
img: "https://proinsuranceinfo.com/wp-content/uploads/2021/10/Nicholas-J.-Banks.jpg",
text:"em ipsum dolor sit, amet consectetur adipisicing elit. Eveniet vitae quaerat animi ea temporibus tempora eius rerum dolore, recusandae a nemo amet perferendis odio debitis et, fugit aperiam alias? Labore perspiciatis aut ad nihil eos inventore illo quos deserunt magni! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga quaerat nihil. Dolor maxime distinctio debitis.",
},
{
  id:2,
  name: 'Zahra Haidari',
  job:"Graphic Designer",
  img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet vitae quaerat animi ea temporibus tempora eius rerum dolore, recusandae a nemo amet perferendis odio debitis et, fugit aperiam alias? Labore perspiciatis aut ad nihil eos inventore illo quos deserunt magni! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga quaerat nihil. Dolor maxime distinctio debitis.",
  },
  {
  id: 3,
    name: 'shakila Haidari',
    job: 'web designer',
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 4,
      name: 'khatira Haidari',
      job: 'programmer',
      img: "https://i.pinimg.com/236x/32/87/e9/3287e9b6eb8cf191bb9c4e2f61199b18.jpg",
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    }
 
];


const img = document.querySelector(".person-1");
console.log(img);
const names = document.getElementById('name');
const job = document.getElementById('job');
const infos = document.getElementById('info');


const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const surbtn = document.querySelector('.sur-btn');
console.log(prevbtn);

let currentItem = 3;

window.addEventListener('DOMContentLoaded', function(){
  showPerson();
});
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  names.textContent = item.name;
  job.textContent = item.job;
  infos.textContent = item.text;
}

nextbtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevbtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

surbtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});


