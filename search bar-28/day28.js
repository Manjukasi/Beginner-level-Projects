const container = document.querySelector(".container")
const magnifierE = document.querySelector(".magnifier")

magnifierE.addEventListener("click",function(){
  container.classList.toggle("active")
})