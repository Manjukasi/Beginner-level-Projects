const total = document.getElementById("total-counter");
const remaining = document.getElementById("remaining-counter");
const text = document.getElementById("textarea");

 text.addEventListener("keyup",function() {
  updateCounter();
})

updateCounter();

function updateCounter(){
 let counter = total.innerText = text.value.length
 remaining.innerText = text.getAttribute("maxLength") - text.value.length
}


