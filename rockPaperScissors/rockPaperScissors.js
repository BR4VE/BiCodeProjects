// 1 is rock
// 2 is paper
// 3 is scissors
​
// generate a number between 1 and 3
var computer = Math.floor(Math.random() * 3 + 1);
​
// ask user
var user = prompt("Rock paper or scissors? (1 is rock, 2 is paper, 3 is scissors)");
​
// convert string to number
user = Number(user);
​
// compare results
​
​
// if user is rock
if(user === 1) {
  
  // if computer is rock
  if(computer === 1) {
    alert("Tie game!");
  }
  
  // if computer is paper
  // paper wins against rock
  if(computer === 2) {
    alert("Paper wins!");
  }
  
  // if computer is scissors
  // rock wins against scissors
  if(computer === 3) {
    alert("Scissors wins!");
  }
}
​
// if user is paper
if(user === 2) {
  
  // if computer is rock
  if(computer === 1) {
    alert("Paper wins!");
  }
  
  // if computer is paper
  // paper wins against rock
  if(computer === 2) {
    alert("Tie game!");
  }
  
  // if computer is scissors
  // scissros wins against paper
  if(computer === 3) {
    alert("Scissors wins!");
  }
}
​
​
// if user is scisors
if(user === 3) {
  
  // if computer is rock
  // rock wins against scissors
  if(computer === 1) {
    alert("Rock wins!");
  }
  
  // if computer is paper
  // scissors wins against paper
  if(computer === 2) {
    alert("Scissors wins!");
  }
  
  // if computer is scissors
  if(computer === 3) {
    alert("Tie game!");
  }
}
