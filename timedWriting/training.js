// variable assignments
var someNumber = 1;

var someString = "Selo";

var someDate = Date.now(); // some milisencond number

console.log(someDate);

// console.log();
console.log(someNumber);

// re assigning variables
someNumber = 12;

someString = "BiCode";

// increasing numbers

someNumber += 3;
someAnotherNumber += 23;

// concatinating strings
var someAnotherString = someString + " " + "Mert";

// getting length of the strings
console.log(someString.length);

// reaching letters
// strings are zero based
console.log(someString[0]); // B
console.log(someString[5]); // e

// arrays
var words = ["Hello", "World"];
// arrays and strings are zero based
console.log(words[0]); // Hello
console.log(words[1]); // World

var firstWord = words[0];
console.log(firstWord);
var secondWord = words[1];
console.log(secondWord);


// if statements

if(3 > 2) {
  console.log("It is true");
}
else {
  // do that
}

if(3 === 3) {
  console.log("It is true");
}
else {
  // do that
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

// for loops
for(var i = 1; i < 5; i++) {
  console.log(i); // 1, 2, 3, 4
}

var someKeyword = "Mert";
for(var k = 0; k < 4; k++) {
  console.log(someKeyword[k]); // M e r t
}

for(var j = 0; j < someKeyword.length; j++) {
  console.log(someKeyword[j]); // M e r t
}

// prompt and alert
alert("HELLOOOOOO!");

var userSays = prompt("How are you?");

console.log(userSays);