//Object structure
//Similar to dictionaries in Python
// <Object Name> = {
//   Key1:"Value one",
//   Key2:"Value two",
//   Key3:"Value three",
//   and so on.....
//
// }

var carInfo = {
  make:"Toyota",
  year:"1990",
  model:"Camry"
};
//When making an object, keys do not need quotes
//When calling a key through the oject, it needs quotes
//ie. carInfo["make"] will return "Toyota"
//ie. carInfo[make] will look for a variable named make.

var myNewO = {
  a:"hello",
  b:[1,2,3],
  c:{inside:["a","b"]}
};

//to get a value from an internal list or object, you need to access it in a seperate
//bracket.
//ie. myNewO["b"][1] will return 2 from the list fron key 'b'
//with objects, you need a new bracket for each access of object and value.
//ie. myNewO["c"]["inside"][0] will return 'a'


//chaning key values
carInfo['year'] = 2006;
carInfo['year'] += 1;


//iterating through an objects
for (var key in carInfo) {
  console.log(key);
  console.log(carInfo[key]);
}


//Object Methods
var carInfo = {
  make: "Toyota",
  year: 1990,
  model: "Camry",
  carAlert: function() {
    alert("We've got a car here!")
  }
}

//example
var myObj = {
  prop: 37,
  reportProp: function() {
    return this.prop;
  }
}

//call methods as such. Object.method()
//ie. myObj.reportProp()


var simple = {
  prop : "Hello",
  myMethod : function() {
    console.log("The myMethod was called");
  }
}

var myObj2 = {
  name : "Matt",
  greet : function() {
    console.log("Hello " + this.name);
  }
}
