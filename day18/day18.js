const prev = document.querySelector(".prev");
const next = document.querySelector(".next")
const container = document.querySelector(".image-container")
const image =  document.querySelectorAll("img")
let currentItem = 0;
let timeout ;

next.addEventListener("click",function(){
 currentItem++
 update();
})

prev.addEventListener("click",function(){
  currentItem--;
  update();
})

function update(){
  if(currentItem > image.length) {
    currentItem = 0;
  }else if(currentItem < 0) {
    currentItem = image.length;
  } 
  container.style.transform = `translateX(-${currentItem * 500}px)`;
}