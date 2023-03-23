const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const steps = document.querySelectorAll(".step");
console.log(steps.length)
const progressE = document.querySelector(".progress-bar-front")
let currentChecked = 1;
const checkedNumber = document.querySelectorAll(".checked");


 nextBtn.addEventListener("click",function(){
  if (currentChecked < 100) {
    progressE.style.width = currentChecked * 25 +"%";     
  }
  currentChecked++;
  if(currentChecked > steps.length){
    currentChecked = steps.length
  }
  updateProgress();
 })

 prevBtn.addEventListener("click",function(){
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateProgress();
 })


 function updateProgress() {
  steps.forEach(function(step,idx) {
    if(idx < currentChecked) {
      step.classList.add("checked");
      step.innerHTML = `<i class="fas fa-check"></i>
      <small>${
        idx === 0
        ? "Start"
        : idx === steps.length - 1
        ? "final"
        : "step" + idx
      }</small> 
      `
    } else {
      step.classList.remove("checked");
      step.innerHTML = `<i class="fas fa-times"></i>`
    }
  })
 }


