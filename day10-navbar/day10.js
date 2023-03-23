const navbarE = document.querySelector(".navbar");
const bottom = document.querySelector(".bottom-container")

console.log(bottom.offsetTop)
console.log(bottom.offsetLeft)
console.log(navbarE.offsetHeight)
console.log(window.scrollY)

 const result = window.addEventListener("scroll", function() {
  if(this.scrollY > bottom.offsetTop - navbarE.offsetHeight - 50 ) {
    navbarE.classList.add("active")
    console.log("activated")
  } else {
    navbarE.classList.remove("active");
    console.log("removed") 
  }
 })

 const scrollE = document.querySelectorAll(".scroll");

 scrollE.forEach(links => {
  links.addEventListener("click", function(e) {
    window.scrollTo(0,485)     
  })
 })

 


