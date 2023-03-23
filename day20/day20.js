const container = document.querySelector(".container")

const occupation = ["youtuber", "web Developer", "creator", "freelancer"]

let occupationIndex = 0;

let index = 0

update();

function update() {
  index++
  container.innerHTML = `<h1> I am a ${occupation[occupationIndex].slice(0,index)} </h1>`;

  if(index === occupation[occupationIndex].length) {
    occupationIndex++;
    index = 0
  }
  
  if (occupationIndex === occupation.length) {
    occupationIndex = 0;
  }
  setTimeout(update,400)
}