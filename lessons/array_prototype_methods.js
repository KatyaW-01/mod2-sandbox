/*
JS Array Prototype Methods Lesson Scratchpad

To run the code in this file, run the command:
  node lessons/array_prototype_methods.js
*/ 
console.log("array_prototype_methods.js is running")


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

//console.log(filterBigCountries(countries))

// ------------- FIND --------------- //
var countries2 = [
  {
      "countryCode": "AS",
      "countryName": "American Samoa",
      "population": "57881",
      "capital": "Pago Pago",
      "continentName": "Oceania"
  },
  {
    "countryCode": "AI",
    "countryName": "Anguilla",
    "population": "13254",
    "capital": "The Valley",
    "continentName": "North America"
  },
  {
      "countryCode": "AD",
      "countryName": "Andorra",
      "population": "84000",
      "capital": "Andorra la Vella",
      "continentName": "Europe"
  },
  {
      "countryCode": "AO",
      "countryName": "Angola",
      "population": "13068161",
      "capital": "Luanda",
      "continentName": "Africa"
  },
  {
      "countryCode": "SX",
      "countryName": "Sint Maarten",
      "population": "37429",
      "capital": "Philipsburg",
      "continentName": "North America"
  },
];
function findFirstNorthAmericanCountry(countries2) {
  var selectedCountry = countries2.find((country) => country.continentName === "North America")
  return selectedCountry
}

//console.log(findFirstNorthAmericanCountry(countries2))

//find the first country with a capital that has a three-word name

function findThreeNameCapital() {
  var threeWordCapital = countries2.find((country)=> country.capital.split(" ").length === 3)
  return threeWordCapital
}

//console.log(findThreeNameCapital())

// ----------------- ForEach -------------- //
var countries3 = [
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
]
//returns an array of all the country codes

function countryCodes(){
  const countryCodesArray = []
  countries3.forEach((country)=>{
    countryCodesArray.push(country.countryCode)
  })
  return countryCodesArray
}

//console.log(countryCodes())

// ----------------------- REDUCE ---------------- //
var numbers = [1,2,5,7]

function getProduct(){
  let sum = numbers.reduce((acc,num)=>{
    acc = acc * num
    //console.log("acc:",acc)
    //console.log("num:",num)
    return acc
  },1)
  return sum
}

//console.log("product:", getProduct())

var countries4 = [
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
]

function organizeByCountry(){
  let newCountriesObject = countries4.reduce((acc,country)=>{
    acc[country.countryName] = {
      "countryCode": country.countryCode, 
      "population": country.population, 
      "capital": country.capital,
      "continentName": country.continentName
    }
    return acc
  },{})
  return newCountriesObject
}

//console.log(organizeByCountry())

// --------------------- SORT --------------- //

var countries5 = [
  {
      "countryCode": "AS",
      "countryName": "American Samoa",
      "population": "57881",
      "capital": "Pago Pago",
      "continentName": "Oceania"
  },
  {
    "countryCode": "AI",
    "countryName": "Anguilla",
    "population": "13254",
    "capital": "The Valley",
    "continentName": "North America"
  },
  {
      "countryCode": "AD",
      "countryName": "Andorra",
      "population": "84000",
      "capital": "Andorra la Vella",
      "continentName": "Europe"
  },
  {
      "countryCode": "AO",
      "countryName": "Angola",
      "population": "13068161",
      "capital": "Luanda",
      "continentName": "Africa"
  },
  {
      "countryCode": "SX",
      "countryName": "Sint Maarten",
      "population": "37429",
      "capital": "Philipsburg",
      "continentName": "North America"
  },
];
//sorts the countries alphabetically by countryCode.
function sortByCountryCode(){
  const sortedArray = countries5.sort((a,b)=>{
    return a.countryCode.localeCompare(b.countryCode)
  })
  return sortedArray
}

//console.log(sortByCountryCode())

function sortByPopulation(){
  const sorted = countries5.sort((a,b)=>{
    var popA = Number(a.population)
    var popB = Number(b.population)

    if (popA > popB) {
      return -1;
    } else if (popA < popB) {
      return 1;
    } else {
      return 0;
    }
  })
  
  return sorted
}

console.log(sortByPopulation())