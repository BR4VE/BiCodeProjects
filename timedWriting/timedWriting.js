// defining our keyword pool
var keywords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "BOOM"];

// defining the start indexa
// arrays and strings are zero based
var index = 0;
// define startDate to calculate te spent time
var startDate = Date.now();

// index is smaller than keywords.length or 11 in this case
while(index < keywords.length) { // noprotect
  // shortcut to react current word
  // rather than writin keywords[index] everytime
  var currentKeyword = keywords[index];
  // getting user type with prompt
  var userType = prompt("Your next word: " + currentKeyword);

  var misspelledLetters = "";

  // if userType matches with currentKeyword move to next keyword  
  if(userType === currentKeyword) {
    index += 1;
  }

  // show user which letters are not matching
  else {
    // check for the misspelled letters
    for(var i = 0; i < currentKeyword.length; i++) {
    	// example: if the first letter of currentKeyword and first letter of userType is matching, just pass
      if(currentKeyword[i] === userType[i]) {
        // do nothing
      }
      // if they do not match, get the letter and saved it to misspelled letters
      else {
        misspelledLetters += ", " + currentKeyword[i];
      }
    }
    // show user which letters they did spell wrong
    alert("The keyword: " + currentKeyword +"\nYou're answer: " + userType + "\nYou've misspelled" + misspelledLetters);
    // do not increment the index
    // user should re-type the currentWord correctly to pass the next index
  }
}

// after user completes all keywords
// show the time
var endDate = Date.now();
var gap = (endDate - startDate) / 1000;

alert("You've completed the game in " + gap);