// variable assignments
var someNumber = 1;
var someAnotherNumber = 100;

var someString = "Selo";
var someAnotherString = "Hello World";
var someAnotherAnotherString = "1";

// console.log();
console.log(someNumber);
console.log(someAnotherNumber);

console.log(someString);
console.log(someAnotherString);

// re assigning variables
someNumber = 12;
console.log(someNumber);

someString = "BiCode";
console.log(someString);

// increasing numbers

someNumber += 3;
someAnotherNumber += 23;

// Converting Strings to Numbers

var stringToNumber = Number(someAnotherString);

// if statements

if(3 > 2) {
  console.log("It is true");
}

if(3 < 5) {
  console.log("It is true");
}

if(3 === 3) {
  console.log("It is true");
}


// while loops

var smallNumber = 3;
var anotherSmallNumber = 3;

while(smallNumber < 5) {
  console.log("It is still small");
  smallNumber += 1;
}


while(anotherSmallNumber < 10) {
  if(anotherSmallNumber === 5) {
    break;
  }
  console.log("Another is still small");
  anotherSmallNumber += 1;
}

// prompt and alert
alert("HELLOOOOOO!");

var userSays = prompt("How are you?");

console.log(userSays);