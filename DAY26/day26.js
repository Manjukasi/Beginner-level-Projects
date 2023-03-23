const dayE = document.getElementById("day");
const hourE = document.getElementById("hour");
const minuteE = document.getElementById("minute");
const secondE = document.getElementById("second");

const newYearTime = new Date("Jan 1 2024 00:00:00").getTime();
update();

function update() {
  const date = new Date().getTime();
  const gap = newYearTime - date;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const d = Math.floor(gap/day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % day) / minute);
  const s = Math.floor((gap % day) / second);

  dayE.innerText = d;
  hourE.innerText = h;
  minuteE.innerText = m;
  secondE.innerText = s;

  setTimeout(update, 1000);
}



