const container = document.querySelector(".container");
const bgImage = document.getElementById("bg-image")

window.addEventListener("scroll",function() {
  UpdateImage()
})

function UpdateImage() {
  bgImage.style.opacity = 1 - window.pageYOffset / 500;
  console.log(window.pageYOffset, 1- window.pageYOffset / 500)
  bgImage.style.backgroundSize =  160 - window.pageYOffset /12 + "%"
}