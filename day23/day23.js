const starE = document.querySelectorAll(".fa-star");
const emojiE = document.querySelectorAll(".emoji");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];



starE.forEach(function(stars, index){
  stars.addEventListener("click", function(){
    updateRating(index);
  })
})

function updateRating(index) {
  starE.forEach(function(starel, idx){
    if(idx < index + 1) {
      starel.classList.add("active")
    } else {
      starel.classList.remove("active")
    }
  })

  emojiE.forEach(function(emojisE){
    emojisE.style.transform = `translateX(-${index * 50}px)`;
    emojisE.style.color = colorsArray[index];
  })
}

