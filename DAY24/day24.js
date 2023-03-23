const counterE = document.querySelectorAll(".counter");

counterE.forEach(function(counter){
  counter.innerText =  0;
  increase();

  function increase() {
    let current = +counter.innerText;
    const dataE = counter.getAttribute("data-id");
    console.log(dataE)
    const incre = dataE/15;
    console.log(incre)
    current = Math.ceil(current + incre);
    console.log(current);
    if (current < dataE) {
      counter.innerText = current;
      setTimeout(increase, 50)
    } else {
      counter.innerText = dataE;
    }



  }
})
