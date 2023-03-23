const container = document.querySelector(".image-container");
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
  addImages();
})


function addImages(){
  for(let i=0; i<10; i++){
    const imgE = document.createElement("img");
    imgE.src = `https://picsum.photos/200/300?random= ${randomN()}`
    container.appendChild(imgE)     
  }
}

function randomN() {
  return Math.floor(Math.random() * 2000);
}

