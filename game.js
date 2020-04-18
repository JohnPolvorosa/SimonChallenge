
let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;
// let randomNumber = nextSequence();


// Check for user keyboard press 'Enter'
$(document).on('keypress', function(event) {
  if(event.which == 13) { //13 is for enter key on all explorers
    nextSequence();
    $("h1").text("Level " + level);
    // level+=1;
  }
});

// Random number generator
function nextSequence() {
  let n = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[n];

  level+=1;
  $("h1").text("Level " + level);

  // Store color into array
  console.log("Computer randomly chose: " + randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log("Computer chosen pattern: " + gamePattern);

  // Play Audio on chosen by random
  playAudio(randomChosenColour);
  // Animate Button on chosen by random
  animatePress(randomChosenColour);

  return n;
}


// jQuery to detect buttons CLICK
$(".btn").on("click", function(event) {
  let userChosenColour = event.target.id;

  // Play Audio on target
  playAudio(userChosenColour);
  // Animate Button
  animatePress(userChosenColour);

  // Store into array
  userClickedPattern.push(userChosenColour);

  // Check Answer @@@
  checkAnswer(userClickedPattern.length-1)

  // Testing debug
  console.log("User chose: " + userChosenColour);
  console.log("Users chosen pattern: " + userClickedPattern);

});

// CHECK ANSWERS @@@
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    // nextSequence();
    console.log("yes");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    // Play wrong audio
    let wrong = new Audio("sounds/wrong.mp3");
    wrong.play();

    // Restart game
    startOver();

    // Adjust h1 title to wrong
    $("h1").text("GAME OVER! Press Enter to restart");

    // Adjust body style wrong
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    console.log("wrong.")
  }
}

// GAME OVER RESTART
function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}


// jQuery Animate Pressed button
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


// javaScript Animate button
function btnAnimate(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 150);
}

// Play music on each case
function playAudio(key) {
  switch (key) {
    case "red":
      let red = new Audio("sounds/red.mp3");
      red.play();

      break;

    case "blue":
      let blue = new Audio("sounds/blue.mp3");
      blue.play();

      break;

    case "green":
      let green = new Audio("sounds/green.mp3");
      green.play();

      break;

    case "yellow":
      let yellow = new Audio("sounds/yellow.mp3");
      yellow.play();

      break;

    default:
      break;
  }
}

function playSound(name) {
  
}