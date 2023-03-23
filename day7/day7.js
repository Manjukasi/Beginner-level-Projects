const scoreE = document.getElementById("score");
const questionEl = document.getElementById("question");
const formE = document.querySelector("#form")
const inputEl = document.querySelector(".input")

let score = JSON.parse(localStorage.getItem("score"));
 
 if (!score) {
  score = 0;
}
scoreE.innerText = `score: ${score}`;



let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);


const text = questionEl.innerText = `what is ${num1} multiply by ${num2}?`
const correctA = num1 * num2
// console.log(text)
formE.addEventListener("submit", function() {
  const userA = +inputEl.value 
 if (correctA === userA) {
  score++
  updateLocalStorage();
 } else {
  score--
  updateLocalStorage();
 }
})
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
