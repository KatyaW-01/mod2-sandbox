/*
JS Array Prototype Methods Lesson Scratchpad

To run the code in this file, run the command:
  node lessons/array_prototype_methods.js
*/ 
//console.log("array_prototype_methods.js is running")


var instructors = ["Erin", "Heather", "Abdul"];

instructors.push('Kayla');

//callback function with two return values 
function addInstructors(instructor) {
  var found = instructors.find((instructor) => {
    return instructor
  })
  return found
}

//console.log(addInstructors("Erin"))

//filter method
const names = ['nick', 'ben', 'trisha', 'john', 'dustin']

var results = names.filter((name) => {
  return name.length <= 4
})

//console.log(results)

var beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

var livingBeatles = beatles.filter((beatle)=>{
  return beatle.living === true
})

//console.log(livingBeatles)

var guitarPlayers = beatles.filter((beatle) => {
  return beatle.instruments.includes('guitar')
})

//console.log(guitarPlayers)










const prices = [4.99, 5.50, 7.00, 10.25];
const increasedPrices = [];

prices.forEach((price) => {
  var newPrice = (price += 1)
  increasedPrices.push(newPrice)
})

console.log(increasedPrices)






const dogs = [
  {name: "Fido", numLegs: 4},
  {name: "Greg", numLegs: 5}
];

var result= ''

dogs.forEach((dog) => {
  result += ` ${dog.name} has ${dog.numLegs} legs. \n`
})

console.log(result)