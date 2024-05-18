let menuOpen = document.getElementById('menu-btn-open');
let menuClose = document.getElementById('menu-btn-close');

menuOpen.addEventListener("click", function() {
  document.querySelector('.menu-div').style.display = "flex";
});

menuClose.addEventListener("click", function() {
  document.querySelector('.menu-div').style.display = "none";
});