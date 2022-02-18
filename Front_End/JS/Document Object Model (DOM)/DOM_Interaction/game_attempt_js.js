

var options = ["X", "O", ""]

//Restart Game button

var restart = document.querySelector('#restart');


//Grab all the squares
// var topLeft = document.querySelector('#tl');
// var topMiddle = document.querySelector('#tm');
// var topRight = document.querySelector('#tr');
// var middleLeft = document.querySelector('#ml');
// var middle= document.querySelector('#mm');
// var middleRight = document.querySelector('#mr');
// var bottomLeft = document.querySelector('#bl');
// var bottomMiddle = document.querySelector('#bm');
// var bottomRight = document.querySelector('#br');
var squares = document.querySelectorAll('td');

//Clear all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener('click',clearBoard);

//Check the square marker
function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}



// For loop to add event listeners to all the squares

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker);
}

// topRight.addEventListener('click', function () {
//   console.log(i);
//   topRight.textContent = options[i];
//   i++;
//   console.log(i);
//   if (i > 2) {
//     i = 0;
//   };
// });
