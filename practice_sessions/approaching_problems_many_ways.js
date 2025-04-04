/*
JS Approaching Problems Many Ways Scratchpad

To run the code in this file, run the command:
  node practice_sessions/approaching_problems_many_ways.js
*/ 
console.log("approaching_problems_many_ways.js is running")


/*  PROMPT:
Write a function findCheapToys that returns an array of toy names that cost less than $20.

Expected output => [ 'Tamagotchi', 'Super Soaker', 'Pogs' ]
*/

const ninetiesToys = [
  {
      name: "Tamagotchi",
      releaseYear: 1996,
      price: 15.99
  },
  {
      name: "Furby",
      releaseYear: 1998,
      price: 29.99
  },
  {
      name: "Super Soaker",
      releaseYear: 1989,
      price: 19.99
  },
  {
      name: "Pogs",
      releaseYear: 1991,
      price: 5.99
  },
  {
      name: "Game Boy",
      releaseYear: 1989,
      price: 89.99
  }
];
const eightiesToys = [
    {
      name: "Rubik's Cube",
      releaseYear: 1980,
      price: 9.99
    },
    {
      name: "Transformers",
      releaseYear: 1984,
      price: 19.99
    },
    {
      name: "My Little Pony",
      releaseYear: 1983,
      price: 12.99
    },
    {
      name: "Cabbage Patch Kids",
      releaseYear: 1982,
      price: 24.99
    },
    {
      name: "Nintendo Entertainment System",
      releaseYear: 1985,
      price: 89.99
    },
    {
      name: "He-Man and the Masters of the Universe",
      releaseYear: 1982,
      price: 14.99
    }
  ];

/* Round 1: forEach
Solve the prompt using a forEach. You may not use any other iterator methods.
*/

//iterate through array
// access prices of each toy
//pull out elements with a price less than $20
// get name of each element

function findCheapToys(toyData){
    let cheapToys = []

    toyData.forEach((toy)=>{
        //console.log(toy.price)
        if (toy.price < 20.00){
            cheapToys.push(toy.name)
        }
    })
    return cheapToys
}

console.log("forEach:",findCheapToys(ninetiesToys))
console.log("forEach:",findCheapToys(eightiesToys))

//pros: iterate through anything
//cons: doesnt have a return value
// wouldnt work when wanting to change the type of what your iterating through?
    //ex: array to hash
//console log when checking that I am accessing the correct data I need

/* Round 2: filter and map
Solve the prompt using a filter and map. You may not use any other iterator methods.
*/

//filter through the original array to create the new array

function findToysWithFilter(toyData){
   let cheapToys = toyData.filter((toy) => toy.price < 20.00) // cheap toys is now array of toys with price < 20
   //console.log(cheapToys)

   let toyNames = cheapToys.map((toy)=>{
    return toy.name
   })

   return toyNames
}

console.log("Filter and Map:",findToysWithFilter(ninetiesToys))
console.log("Filter and Map:",findToysWithFilter(eightiesToys))

//pros: filter through the array to pull out select elements you want 
//cons: needed to use two iteration methods instead of just one, filter wont let you change the array only pull out elements
// needed to use both because map will give you the names while filter can't do that
//console logged the filtered array to make sure I did the filter correctly
//steps:
    //filter through the original array creating a new array with only the elements that have a price less than twenty
    // map through the new array returning the toy name
    //return the toy name
    //console log the funciton

/* Round 3: reduce
Solve the prompt using a reduce. You may not use any other iterator methods.
*/

function toyNamesWithReduce(toyData){
    let cheapToys = toyData.reduce((acc,toy)=>{
        if (toy.price < 20.00) {
            acc.push(toy.name)
        }
        return acc
    },[])
    return cheapToys
}

console.log("Reduce:",toyNamesWithReduce(ninetiesToys))
console.log("Reduce:",toyNamesWithReduce(eightiesToys))

//pros: one iterator method instead of two
//cons: a little more complicated 
//reduce works best when changing datatype such as hash to array or vice versa 
//Similar to for each in that we have an if statement and are pushing the toy.name into an array
    //but aren't declaring the variable outside of the reduce function
/* Steps:
    Iterate through the original array
    Have a starting value of an empty array
    if the price of the toy is less than 20 push the toy name into the accumulator (the array)
    return the accumulator so that the array is the new starting value every time it iterates through
    return the reduce function inside of the toynames function
    console log the toynames function
*/


/*I preferred the filter and map. It seemed most logical to me and then I dont have to worry about 
forgetting about the no return value of the forEach or the more complicated logic of the reduce. */