const btn = document.querySelectorAll(".button");
const content = document.querySelectorAll(".content")
const tabs = document.querySelector(".tabs")

// btn.forEach(function(buttons) {
//   buttons.addEventListener("click", function(e) {
//     console.log(e.currentTarget);
//     console.log(e.target)
//     const target = e.currentTarget.dataset.id
//     if (target) {
//       content.forEach(function(text) {
//         text.classList.add("live")
//         buttons.classList.add("live")
//       })
//     } else {
//       text.classList.remove("live")
//       buttons.classList.remove("live")
//     }
//   })
// })

tabs.addEventListener("click", function(e){
 const target = e.target.dataset.id;
 console.log(target)
 if(target) {
  btn.forEach(function(button) {
    button.classList.remove("live")
  })
  e.target.classList.add("live");

  content.forEach(function(text) {
    text.classList.remove("live")
  })
  const element = document.getElementById(target);
  element.classList.add("live")
 }
})