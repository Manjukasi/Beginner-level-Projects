const btn  = document.querySelector(".btn");

btn.addEventListener("mouseover", function(e){
  const X = (e.pageX - btn.offsetLeft);
  console.log(e.pageX)
  console.log(btn.offsetLeft)
  console.log(X)
  const Y = (e.pageY - btn.offsetTop);
  console.log(e)
  console.log(e.pageY)
  console.log(btn.offsetTop)
  console.log(Y)


  btn.style.setProperty("--xPos", X + "px")
  btn.style.setProperty("--yPos", Y + "px")
});