const button = document.querySelector(".btn");
const trailer = document.querySelector(".trailer-container")
const icon = document.querySelector(".close-icon")
const video = document.querySelector("video")

button.addEventListener("click",function(e){
  // console.log("Hello")
   trailer.classList.remove("active")
})
icon.addEventListener("click",function(e){
  trailer.classList.add("active")
  video.pause();
  video.currentTime = 0;
})