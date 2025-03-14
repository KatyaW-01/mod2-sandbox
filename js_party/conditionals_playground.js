/* To run the code in this file, run the command:
      node js_party/conditionals_playground.js
*/

console.log("conditionals_playground.js is running")


/* Exercise 1 - Voter Eligibility

Write a function checkVotingEligibility that takes an age as input and prints a message indicating whether the person is eligible to vote (age 18 and above) or not eligible to vote (below age 18).
*/

function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log('You can vote!')
  }
  else {
    console.log('Sorry you arent old enough')
  }
}

// Check your work by uncommenting each of these invocations:
  checkVotingEligibility(19)
checkVotingEligibility(15)
checkVotingEligibility(18)


/* Exercise 2 - Password Strength Checker

Write a function checkPasswordStrength that takes a password as input and prints 'Weak', 'Medium', or 'Strong' based on the following criteria:

Weak: less than 6 characters
Medium: 6-12 characters
Strong: more than 12 characters
*/

function checkPasswordStrength(password) {
  if(password.length < 6) {
    console.log('weak')
  }
  else if(password.length <= 12 && password.length >= 6){
    console.log('medium')
  }
  else if(password.length > 12){
    console.log('strong')
  }
}

// Check your work by uncommenting each of these invocations:
checkPasswordStrength("pz394Gw86wwmh1")
checkPasswordStrength("12345")
checkPasswordStrength("myPass1!")
//var name = 'Katya'
//console.log(name.length)

/* Exercise 3 - Grade Calculator

Write a function calculateGrade that takes a numeric score (0-100) and returns the corresponding letter grade based on the following scale:


A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59

*/


function calculateGrade(grade) {
  if(grade >= 90 && grade <= 100){
    console.log('A')
  }
  else if (grade >= 80 && grade <= 89){
    console.log('B')
  }
  else if (grade >= 70 && grade <= 79){
    console.log('C')
  }
  else if (grade >= 60 && grade <= 69){
    console.log('D')
  }
  else {
    console.log ('F')
  }
}

// Check your work by uncommenting each of these invocations:
calculateGrade(95)
calculateGrade(86)
calculateGrade(79)
calculateGrade(61)
calculateGrade(52)

