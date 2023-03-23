const inputE = document.querySelector(".input");
const formE = document.querySelector(".form");
const ulEl = document.querySelector(".list");

let list =JSON.parse(localStorage.getItem("list"));
if(list){
  list.forEach(function(task){
    todolist(task);
  })
}

formE.addEventListener("submit", function(e){
  e.preventDefault();
  todolist();
})

function todolist(task) {
  let newTask = inputE.value ;
  if(task){
    newTask = task.name;
  }
  const liEL = document.createElement("li");

  if(task && task.checked){
    liEL.classList.add("checked");
  }
  liEL.innerText = newTask;
  ulEl.appendChild(liEL);
  inputE.value = "";

  const checkBtn = document.createElement("div");
  checkBtn.innerHTML = `<i class="fas fa-check-square">`;
  liEL.appendChild(checkBtn)

  const deleteBtn = document.createElement("div");
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  liEL.appendChild(deleteBtn)

  checkBtn.addEventListener("click",function(){
    liEL.classList.toggle("checked");
    update();
  })
  deleteBtn.addEventListener("click",function(){
    liEL.remove();
    update();
  })
  
update();
}

function update() {
  const liEs = document.querySelectorAll("li");
  list = [];
  liEs.forEach(function(liE){
    list.push({
      name: liE.innerText,
      checked: liE.classList.contains("checked")
    })
  })
  localStorage.setItem("list", JSON.stringify(list));
}