var firstName = prompt("Please enter your first name: ")
var lastName = prompt("Please enter your last name: ")
var age = prompt("Please enter your age: ")
var height = prompt("Please enter your height: ")
var petName = prompt("Please enter the name of your pet: ")


if (firstName[0] === lastName[0]){
  console.log("check 1");
  if (age > 20 && age < 30){
    console.log("check 2");
    if (height > 170){
      console.log("check 3")
      if (petName[petName.length-1] === 'y'){
        console.log("You are a spy....");
      }
    }
  }
}
