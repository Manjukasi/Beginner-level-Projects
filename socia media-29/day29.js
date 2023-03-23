const menu = document.querySelector(".menu");
const list = document.querySelector(".social-lists");
const icons = document.querySelectorAll(".social-lists li");
const menutextE = document.querySelector(".menu p")
const arrow = document.querySelector(".arrow")

menu.addEventListener("click",function(){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate")
})

icons.forEach(function(icon){
  icon.addEventListener("click",function(){
    menutextE.innerHTML = icon.innerHTML;
    list.classList.add("hide");
    menu.classList.toggle("rotate");
    arrow.classList.toggle("rotate")
  })
})


