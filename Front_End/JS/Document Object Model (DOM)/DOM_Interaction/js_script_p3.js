var headOne = document.querySelector('#one');
var headTwo = document.querySelector('#two');
var headThree = document.querySelector('#three');


headOne.addEventListener('mouseover', function functionName() {
  headOne.textContent = "Mouse Currently Over";
  headOne.style.color = 'red';
})

headOne.addEventListener('mouseout', function functionName() {
  headOne.textContent = "HOVER OVER ME";
  headOne.style.color = 'black';
})

headTwo.addEventListener('click', function functionName() {
  headTwo.textContent = "CLICKED ON"
  headTwo.style.color = "blue"
})

headThree.addEventListener('dblclick', function functionName() {
  headThree.textContent = "I WAS DOUBLE CLICKED!"
  headThree.style.color = "red"
})
