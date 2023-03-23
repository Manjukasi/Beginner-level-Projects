const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm");



  function updateClock() { 
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();  

    const updatedH = hours.innerText = hour;
    const updatedM = minutes.innerText = minute;
    const updatedS = seconds.innerText = second;

    if(updatedH > 12){
      ampmEl.innerText = "pm"
    }else {
      ampmEl.innerText = "am"
    }
    
  }
  const update = setInterval(updateClock, 1000) 


  



