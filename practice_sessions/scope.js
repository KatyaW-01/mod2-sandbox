/*
  node practice_sessions/scope.js
*/ 
console.log("scope.js is running\n")
//SCOPE determines what and where we have access to something 



//Example 1
const hungriestDog = 'Tess';

function begForTreats(seconds) {
  const result = seconds * 2;

  if (result > 5) {
    return 'This human is rude, not giving me treats. Onto the next one.';
  } else {
    return 'Yum, human food!';
  }
}

let beggingTime = 1;

let beg = begForTreats(beggingTime);

beggingTime = 4;
//console.log(beg)










//Example 2

function buildLaser () {  
  var message = 'Laser Built';  
  //console.log(message);
}

function buildMoonBase () {  
  var message = 'Moon Base Built';  
  buildLaser();
  //console.log(message);
}

function ransomTheWorld () {
  buildMoonBase();  
}

ransomTheWorld();








//Javascript is a two-pass language (scans your code twice)
//Hoisting => in its memory in the first pass moves all of the funcitons declared with the 'function' keyword to the top of the file

//Example 3

const moo = mooLikeACow();

/* const mooLikeACow = () => {
  return "Mooooo!";
};
*/

function mooLikeACow() {
  return 'Moooo!';
}

//console.log('Animal Sound: ', moo);

//can define a function after it is called
//function can be defined anywhere in the application






// Example 4

// var modTwoTeachers = ['Hannah', 'Nik', 'Leta'];

// function calculateEvals (teachers, classSize) {
//   return classSize / teachers.length;
// }
// var currentCohort = 33;

// var numEvals = calculateEvals(modTwoTeachers, currentCohort);


// console.log(numEvals);

let modTwoTeachers = ['Hannah', 'Nik', 'Leta'];

function calculateEvals (teachers, classSize) {
  return classSize / teachers.length;
}
let currentCohort = 33;
let numEvals = calculateEvals(modTwoTeachers, currentCohort);


console.log(numEvals);
