const inputE = document.getElementById("input");
const button = document.querySelector(".btn");
const copyIconE = document.querySelector(".symbol");
const alertE = document.querySelector(".alert-container");

button.addEventListener("click",function(){
  const chars ="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for(let i=0; i < passwordLength; i++){
    const random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random, random +1)
    console.log(password)
  }
  inputE.value = password;
  alertE.innerText = password + " " +"copied!"
})

copyIconE.addEventListener("click",function(){
  console.log("hello")
  inputE.select();
  inputE.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputE.value); 
  if(inputE.value) {
    alertE.classList.remove("active")
  }
  setTimeout(() => {
    alertE.classList.add("active")
  },2000)
})