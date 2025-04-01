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

//console.log(increasedPrices)


const dogs = [
  {name: "Fido", numLegs: 4},
  {name: "Greg", numLegs: 5}
];

var result= ''

dogs.forEach((dog) => {
  result += ` ${dog.name} has ${dog.numLegs} legs. \n`
})

//console.log(result)


// ------------ MAP ITERATION ------------- //
var countries = [
  {
    "countryCode": "AF",
    "countryName": "Afghanistan",
    "population": "29121286",
    "capital": "Kabul",
    "continentName": "Asia"
  },
  {
    "countryCode": "AL",
    "countryName": "Albania",
    "population": "2986952",
    "capital": "Tirana",
    "continentName": "Europe"
  },
  {
    "countryCode": "DZ",
    "countryName": "Algeria",
    "population": "34586184",
    "capital": "Algiers",
    "continentName": "Africa"
  },
  {
    "countryCode": "AM",
    "countryName": "Armenia",
    "population": "29680000",
    "capital": "Yerevan",
    "continentName": "Asia"
  }
]

function explainCodes(countries) {
  var string = countries.map((country) => {
    return `${country.countryCode} stands for ${country.countryName}`
  })
  return string
} // => ["AF stands for Afghanistan","AL stands for Albania","DZ stands for Algeria"]

//console.log(explainCodes(countries))

var countryStrings = countries.map((country )=> {
  return `${country.countryCode} stands for ${country.countryName}`
})

//console.log(countryStrings)

function cleanCountryData(countries) {
  var cleanCountries = countries.map((country) => {
    return { "countryName": country.countryName, "capital": country.capital, "continentName": country.continentName }
  })
  return cleanCountries
}

//console.log(cleanCountryData(countries))


// ------------------ FILTER --------------------------- //
function filterAsianCountries(countries) {
  var asianCountries = countries.filter((country) => country.continentName === "Asia")
  return asianCountries
}
//console.log(filterAsianCountries(countries))

//find all countries with a population greater than 1,500,000.
function filterBigCountries(countries) {
  var bigCountries = countries.filter((country) => country.population > 1500000)
  return bigCountries
}

console.log(filterBigCountries(countries))

// ------------- FIND --------------- //



// ----------------- ForEach -------------- //


// ----------------------- REDUCE ---------------- //



// --------------------- SORT --------------- //