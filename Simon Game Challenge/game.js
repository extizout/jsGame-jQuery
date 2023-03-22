var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var started = false;
var buttonColours = ["red", "blue", "green", "yellow"];



function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColours = buttonColours[randomNumber];

  $("#" + randomChosenColours).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColours);
  gamePattern.push(randomChosenColours);

  $("h1").text("Level " + level);
  level++;
  userClickedPattern = [];
}

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100)

}

function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000)
    }
  } else {
    console.log("Wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }

}

function startOver(){
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  level = 0;
}

// Event click
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id"); //ดึงattr มาจาก id btn ที่กด

  animatePress(userChosenColour);
  playSound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})

//Event Keyboard ดักกดปุ่มไม่ให้ call nextSequence() function
$(document).on("keydown", function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
