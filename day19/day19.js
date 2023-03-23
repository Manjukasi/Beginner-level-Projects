const body = document.querySelector("body");
const input = document.querySelector(".input");

input.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
  if(input.checked) {
    body.style.backgroundColor = "red";
  } else {
    body.style.backgroundColor = "white";
  }
}

input.addEventListener("input", () => {
  updateBody();
  updateLocal();
})

function updateLocal() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}