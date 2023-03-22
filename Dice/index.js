function diceRoll(maxRoll,dice){
  var randomNumber = Math.floor((Math.random() * maxRoll) + 1);
  document.querySelector(".img"+dice).setAttribute("src","images/dice"+randomNumber+".png");
  return randomNumber;
}

///////////////////////////////////

var randomNumber1 = diceRoll(6,1);
var randomNumber2 = diceRoll(6,2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = " Player 1 Win ";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".container h1").innerHTML = " Player 2 Win ";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector(".container h1").innerHTML = "  Draw ";
} else {
  console.log("Bug");
}
