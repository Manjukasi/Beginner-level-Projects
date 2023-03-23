const controls = document.querySelectorAll(".controls input");

function updateTracker() {
  const suffix = this.dataset.sizing || "";
  // console.log(suffix);
  // console.log(this.name)
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}


controls.forEach(function(input){
  input.addEventListener("change",updateTracker)
})
// controls.forEach(function(input){
//   input.addEventListener("mousemove",updateTracker)
// })