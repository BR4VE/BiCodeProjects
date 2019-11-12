// generate a random number between 1 and 10
// and assign it to randomNum variable
var randomNum = Math.floor(Math.random() * 10 + 1);

// define the try count, and isFound
var tryCount = 0;

// start a loop and ask for the answer
while(tryCount < 3) { // noprotect (for JS bin)
  
  // ask user their guess
  var userGuess = prompt("Guess the number");
  
  
  // convert guess into number
  userGuess = Number(userGuess);
  
  // if userGuess matches with randomNumber
  // alert and top the loop
  if(userGuess === randomNum) {
    alert("You've found the secret number!");
    break;
  }
  
  // if userGuess is bigger than randomNum alert user
  if(userGuess > randomNum) {
    alert("Your guess is to big!");
    
    // increase the tryCount by one
    // this means user has used one of its chances
    tryCount +=1;
  }
  
  // if userGuess is smaller than randomNum alert user
  if(userGuess < randomNum) {
    alert("Your guess is to small!");
    // increase the tryCount by one
    // this means user has used one of its chancess
    tryCount +=1;
  }
  
  // if user has tried 3 times,
  // say the randomNum and stop the game
  if(tryCount === 3) {
    alert("You've lost your chance, the secret number was " + randomNum);
  }
}