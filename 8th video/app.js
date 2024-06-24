const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-play");


btn.addEventListener("click", function () {
  if(!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove('slide');
    video.play();
  }
});
const gif = document.querySelector('.gif');

window.addEventListener('load', function() {
  gif.classList.add('hide-gif');
})