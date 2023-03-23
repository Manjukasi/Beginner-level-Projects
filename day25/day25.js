const prev = document.getElementById("prev");
const next = document.getElementById("next")
const imageE = document.querySelector(".image-container");
let num = 0;
prev.addEventListener("click", function(){
  // num = num + 45;
  console.log("clicked")
  imageE.style.transform = `perspective(1000px) rotateY(${num + 45}deg)`
})
next.addEventListener("click", function(){
  num = num - 45;
  imageE.style.transform = `perspective(1000px) rotateY(${num}deg)`
})
 function update(){
  num = num - 45;
  imageE.style.transform = `perspective(1000px) rotateY(${num}deg)`;
  setTimeout(update, 3000);
 }
update();


