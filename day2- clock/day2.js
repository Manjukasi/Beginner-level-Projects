const long = document.querySelector(".long-hand");
const short = document.querySelector(".short-hand");
const second = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  second.style.transform = `rotate(${secondDegrees}deg)`

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  long.style.transform = `rotate(${minutesDegrees}deg)`


  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90 ;
  short.style.transform = `rotate(${hourDegrees}deg)`


  // console.log(minutes);
  // console.log(seconds);
  // console.log(hours);

}
setInterval(setDate, 1000);

