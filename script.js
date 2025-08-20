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