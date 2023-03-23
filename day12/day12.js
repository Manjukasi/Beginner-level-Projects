// const span = document.createElement("span");
// const body = document.querySelector("body");

// body.addEventListener("click",function(e){
//   const x = e.pageX;
//   console.log(x)
//   const y = e.pageY;
//   console.log(y)
//   span.style.left = x + "px";
//   span.style.top = y + "px";
//   const size =Math.floor(Math.random() * 100) ;
//   console.log(size)
//   span.style.width = size + "px"
//   span.style.height = size + "px";
//   console.log(span)
//   body.appendChild("span")
//   this.setTimeout(function(){
//      span.remove();
//      console.log("hello")
//   },2000);
// })
// console.log(this)
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  console.log(xPos)
  const e = event.pageX;
  console.log(e)
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  console.log(spanEl)
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});




