
const btn = document.querySelector('.btn');
const btnClose = document.querySelector('.close-btn');
const hero2 = document.querySelector('.hero2')


btn.addEventListener('click', function() {
  hero2.classList.toggle('open-model')
})
btnClose.addEventListener('click', function() {
 hero2.classList.remove('open-model')
})
