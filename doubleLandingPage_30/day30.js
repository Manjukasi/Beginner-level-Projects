const left = document.querySelector(".left")
const right = document.querySelector(".right")
const container = document.querySelector(".container")

console.log(left);
console.log(right);
console.log(container)

left.addEventListener("mouseenter", function(){
  container.classList.add("active-left")
})

left.addEventListener("mouseleave",function(){
  container.classList.remove("active-left")
})

right.addEventListener("mouseenter", function(){
  container.classList.add("active-right")
})

right.addEventListener("mouseleave",function(){
  container.classList.remove("active-right")
})

