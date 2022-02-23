//game variables
var circles = document.querySelectorAll('td');
var turn = 0;
var gameOn = true;

//Set player names and colors

var pOneName = prompt("Player One: Enter Your Name, you will be Blue");
var pTwoName = prompt("Player Two: Enter Your Name, you will be Red");

//check if game is still playing
while (gameOn) {

  //turn tracking
  if (turn%2 === 0) {
    $('.playerName').text(pOneName);
    console.log('p1 turn');




    turn++;
  }else {
    $('.playerName').text(pOneName);
    console.log('p2 turn');





    turn++;
  }
}






//button color change base on player's turn
