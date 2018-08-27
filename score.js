//If playerOne button is clicked add 1 to the playerOneScore
//If playerTwo button is clicked add 1 to the playerTwoScore
//If playerOneScore or playerTwoScore equals scoreInput change value to green
//If reset button is clicked change playerOneScore and playerTwoScore to 0
//If form scoreInput is updated, change the playingTo number

//Select the buttons
var playerOne = document.querySelector(".playerOne");
var playerTwo = document.querySelector(".playerTwo");
var reset = document.querySelector(".reset");

//Declare a score variable to updated
var p1Score = 0;
var p2Score = 0;
var playingToNum = 5;
var winningScore = false;


//Select the player scores
var playerOneScore = document.querySelector(".playerOneScore");
var playerTwoScore = document.querySelector(".playerTwoScore");

//Select the playing to value
var playingTo = document.querySelector(".playingTo");

//Select the form
var scoreInput = document.querySelector(".scoreInput");

//Add event listener on the buttons
playerOne.addEventListener("click", addOneP1);
playerTwo.addEventListener("click", addOneP2);
reset.addEventListener("click", resetClick);

//Add event listener on the input
scoreInput.addEventListener("change", function() {
  inputPlayingTo();
  resetClick();
});


//Add One to scores
function addOneP1() {
  if (!winningScore) {
    p1Score++;
    console.log(playingToNum, p1Score);
    if (p1Score === playingToNum) {
      winningScore = true;
      // alert("Winner: Player 1");
      // resetClick();
        playerOneScore.classList.add("numberGreen");

    }
  }
    playerOneScore.textContent = p1Score;
    console.log(p1Score);
}

function addOneP2() {
    if (!winningScore) {
      p2Score++;
      if (p2Score === playingToNum) {
        winningScore = true;
        // resetClick();
        playerTwoScore.classList.add("numberGreen");

    }
  } playerTwoScore.textContent = p2Score;
    console.log(p2Score);
}

//Input playing to
function inputPlayingTo() {
  playingTo.textContent = scoreInput.value;
  console.log("Playing To Updated");
  playingToNum = Number(scoreInput.value);
}

//Reset scores to 0
function resetClick() {
  playerOneScore.textContent = "0";
  playerTwoScore.textContent = "0";
  console.log("Reset to zero");
  p1Score = 0;
  p2Score = 0;
  winningScore = false;
  playerOneScore.classList.remove("numberGreen");
  playerTwoScore.classList.remove("numberGreen");
}
