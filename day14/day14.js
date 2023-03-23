const btn = document.querySelector(".btn");
const popup = document.querySelector(".popup-container");
const closeIcon = document.querySelector(".close-icon");
const container = document.querySelector(".container");

btn.addEventListener("click", function(){
  // console.log("true")
  popup.classList.remove("active");
  container.classList.add("active");
  console.log("active");
})

closeIcon.addEventListener("click",function(){
  popup.classList.add("active")
  container.classList.remove("active")
  console.log("closed")
})