// $("h1").text("Hello");
let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];
let randomNumber = nextSequence();
let randomChosenColour = buttonColours[nextSequence()];

function nextSequence() {
  let n = Math.floor(Math.random() * 4);

  return n;
}



gamePattern.push[randomChosenColour];

$("h1").text(randomChosenColour);


for (i = 0; i < 4; i++) {
    let btnInnerHTML = this.innerHTML;
  
    $(".btn")[i].click(function () {
      $(".btn")[i].btnAnimate(btnInnerHTML);
      console.log(btnInnerHTML);
    });
  }


function btnAnimate(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 150);
}

