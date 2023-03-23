const button = document.querySelector(".btn");
const content = document.querySelector(".joke");

const apiKey = "w48Ekm3gm8otQd2UxhIXig==Mt0PhkUqBvxxuqjY"

const options = {
  method: "GET",
  headers: {
    "x-Api-key": apiKey
  },
}

const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

 async function addJoke() {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data)
}

button.addEventListener("click",addJoke)