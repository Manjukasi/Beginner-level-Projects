const container = document.querySelector(".container")

const btns = ["crash","kick","snare","tom"]

btns.forEach(function(btn){
  const button = document.createElement("button");
  button.classList.add("btn");
  container.appendChild(button);
  button.innerText = btn;
  button.style.backgroundImage = "url(images/"+btn+".png)"
  const audio = document.createElement("audio");
  container.appendChild(audio)
  audio.src = "sounds/" + btn + ".mp3";
  button.addEventListener("click",function(){
    audio.play();
  });
  window.addEventListener("keydown", function(event){
    if(event.key === btn.slice(0,1)) {
      audio.play();
      button.style.transform = "scale(0.9)";
      this.setTimeout(function(){
        button.style.transform ="scale(1)";
      },100)
    }
  })
});
