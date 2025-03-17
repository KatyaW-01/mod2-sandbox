/* To run the code in this file, run the command:
      node js_party/iterators_playground.js
*/

console.log("iterators_playground.js is running")

// We'll show an example of the built in iterator methods like forEach, map, find, filter and reduce which can be used instead of a for loop.  

var snacks = ['cookies', 'crackers', 'chips', 'popcorn', 'pretzels']

// 1. Using the snacks array, this function will use a for loop to iterate over each snack and print an interpolated string to the console for each snack.
//Uncomment the invocation below to see it print to the console.

function printSnacksStatement(snacks) {
  for (var i = 0; i < snacks.length; i++) {
    var statement = `I love ${snacks[i]}.`
    console.log(statement)
  }
}

printSnacksStatement(snacks)

//  2. Uncomment the invocation below to see the same task accomplished using the forEach() iterator method instead of a for loop.

function forEachThruSnacks(snacks) {
  snacks.forEach(snack => {
    var statement = `I love ${snack}.`
    console.log(statement)
  })
}

forEachThruSnacks(snacks)

// 3. Uncomment the invocation below to see the iterator method map() being used to create a *new array* with "I love <each snack>" strings in it.

function mapOverSnacks(snacks) {
  var loveSnackStatements = snacks.map(snack => 
   `I love ${snack}.`
  )
  console.log(loveSnackStatements)
}

console.log('')
mapOverSnacks(snacks)

// 4. Uncomment the invocation below to see the iterator method find() being used to return the FIRST element in the array that meets the criteria of being 5 letters long.

function findFiveLetterSnack(snacks) {
  var foundSnack = snacks.find(snack => {
    return snack.length === 5
  })
  console.log(foundSnack)
}

findFiveLetterSnack(snacks)

// 5. Uncomment the invocation below to see the iterator method filter() being used to return a new array of ALL snacks that meet the criteria of being more than 6 letters long.

function filterForOverSixLetters(snacks) {
  var filteredSnacks = snacks.filter(snack => {
    return snack.length > 6
  })
  console.log(filteredSnacks)
}

filterForOverSixLetters(snacks)


// 6. Reduce is pretty spicy!  Uncomment the invocation below to see the iterator method reduce() being used to iterate over the numbers array and return the sum of all the numbers.

var numbers = [31, 39, 42, 28, 23, 27, 40]

function getSum(numbers) {
  var total = numbers.reduce((sum, num) => {
    sum += num
    return sum
  }, 0)
  console.log(total)
}

getSum(numbers)
// Expected result: 230


// 7. You try it!  Try writing you own function called "shoutSnacks" that takes in the original "snacks" array and uses the iterator method "forEach" to console.log() each of the snacks changed to uppercase.  You'll also need to use the .toUpperCase() method.  Use MDN and google to help you!  Try it! Get weird!
var snacks = ['cookies', 'crackers', 'chips', 'popcorn', 'pretzels']

function shoutSnacksEach(snacks) {
  snacks.forEach(snack => {var shout = snack.toUpperCase()
  console.log(shout)
  })
}
shoutSnacksEach(snacks)

function shoutSnacks(snacks) {
  var shout = snacks.map(snack => snack.toUpperCase())
  console.log(shout)
}
shoutSnacks(snacks)