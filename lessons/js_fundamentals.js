/*
JS Fundamentals Lesson Scratchpad

To run the code in this file, run the command:
      node lessons/js_fundamentals.js
*/ 
//console.log("js_fundamentals.js is running")


/*
JS Variables & Data Types Examples
*/ 

var firstName = 'Ben';
var age = 26;
const isNice = true;

//console.log(firstName)

const policeSketchDescription = {
  hair: 'blond',
  eyes: 'brown',
  isTall: false,
  visibleTattoos: 1
}

console.log(policeSketchDescription.hair)
console.log('eye color:', policeSketchDescription["eyes"])
console.log(policeSketchDescription.visibleTattoos)

let favoriteFoods = ['pizza', 'blueberries', 'ice cream', 'sushi']

console.log(favoriteFoods[0])
console.log(favoriteFoods[3])

let partnerName = null;
let jobTitle;
//console.log(jobTitle)









/*
JS Conditionals
*/ 

function identifyCookie(cookie) {
  if (cookie === "chocolate chip") {
    console.log("This cookie is a chocolate chip cookie!");
  } else if (cookie === "oatmeal raisin") {
    console.log("This should not even be called a cookie :(");
  } else {
    console.log("I bet you wish you had a chocolate chip cookie");
  }
}

// identifyCookie("chocolate chip")
// identifyCookie("oatmeal raisin")
// identifyCookie("sugar")

function evaluateSleep(hoursOfSleep) {  

}

// evaluateSleep(8)
// evaluateSleep(4)



function greetPerson(firstName,lastName) {
  var greeting = "Hello" + " " + firstName + " " + lastName
  console.log(greeting)
  return greeting
}

greetPerson("Katya","Weicht")


