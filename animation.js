var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggleMenu = menuToggle.addEventListener("click", function() {
    for (var actived = 0; actived < activeElements.length; actived++) {
        activeElements[actived].classList.toggle("active");
    }
})