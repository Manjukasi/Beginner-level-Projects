const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const container = document.querySelector(".container");

for(let i=0; i < 60; i++) {
  const containerE1 = document.createElement("div");
  containerE1.classList.add("color-container");
  container.appendChild(containerE1)
}
const color = document.querySelectorAll(".color-container");
colors();

function colors() {
  color.forEach(function(containerE1){
    const code = generate();
    console.log(code);
    containerE1.style.backgroundColor = code;
    containerE1.textContent = code;
  })
} 

function generate(){
  let hexColor = '#';
  for(let i=0; i < 6; i++){
    hexColor += hex[randomN()]
  }
  return hexColor;
}

function randomN() {
  return Math.floor(Math.random() * hex.length);
  }
