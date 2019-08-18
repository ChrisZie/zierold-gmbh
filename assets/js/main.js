window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 100;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(".navbar-toggler").click(function() {
  // toggle the class after half second
  setTimeout(function() {
    $(".navbar-collapse").toggleClass("show");
  }, 200);
});
