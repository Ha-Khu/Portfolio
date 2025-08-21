/*NAVBAR SCROLL*/
let lastScroll = 0;
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", () =>{
  let currentScroll = window.pageYOffset
  if(currentScroll > 80) {
    if(lastScroll > currentScroll){
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-10vh";
    }
  }
  lastScroll = currentScroll;
})


/*FADE IN ANIMATION*/

let sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () =>{
  sections.forEach(section =>{
    let currentSection = section.getBoundingClientRect().top
    let currentHeight = window.innerHeight;
    if(currentSection < currentHeight - 100){
      section.classList.add("visible");
    }
  })
})


/*NAVBAR RESPONSIVE*/

const navLinks = document.querySelector(".dropdown-menu");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
})