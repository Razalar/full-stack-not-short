// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT


// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(student) {
  roster.push(student);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(student) {
  var remStudent = roster.indexOf(student);
  roster.splice(remStudent, 1);
}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.
function display() {
  console.log(roster);
}

// Start by asking if they want to use the web app
var choice = prompt("Would you like to use the web app?")
if (choice == 'no') {
  console.log("ok");
}else{
  var keepGoing = true;
  while (keepGoing) {
    var choiceTwo = prompt("Would you like to add, remove, display, or quit?");
    if (choiceTwo == "add") {
    var name = prompt("Please enter the student's name: ");
      addNew(name)
    }
    if (choiceTwo == "remove") {
      var name = prompt("Please enter the student's name: ");
      remove(name);
    }
    if (choiceTwo == "display") {
      display();
    }
    if (choiceTwo == "quit"){
      keepGoing = false;
    }
  }
}


// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
