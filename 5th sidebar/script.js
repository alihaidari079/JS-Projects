const btnSidebar = document.querySelector(".btn-sidebar");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
btnSidebar.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
