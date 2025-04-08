/*
Pair Practice 2 - Pangram

To run the code in this file, run the command:
  node practice_sessions/pangram.js
*/ 
console.log("pangram.js is running\n")


//Data
const pangram = "the quick brown fox jumps over the lazy dog"
const quote = "sucking at something is the first step towards being kinda good at something"


/* LEVEL ONE
Write a function that takes in a string and counts how many words are in that string.

countWords(pangram) -->  9
countWords(quote) -->  13
*/
function countWords(string){
  return string.split(" ").length
}

console.log("Number of words in pangram:", countWords(pangram))
console.log("Number of words in quote:", countWords(quote))



/* LEVEL TWO
Write a function that takes in a string and a number. The function should return the number of words in that string which are as long, or longer, than the given number.  *Hint* We need to look at each word one at a time.  But we can't iterate over a string, only arrays. So how can we turn this string into an array of individual words?

countWordsByLength(pangram, 4) -->  5
countWordsByLength(quote, 5) -->  7
*/

function countWordsByLength(string,number){
  let arrayOfWords = string.split(" ")

  let resultsArray = arrayOfWords.filter((word)=> word.length >= number)

  return resultsArray.length
}

console.log("Number of words in pangram longer than 4:", countWordsByLength(pangram,4))
console.log("Number of words in quote longer than 5:", countWordsByLength(quote,5))


/* LEVEL THREE
Write a function that takes in a string. The function should return an array of words with each word in all caps.  *Hint* You might need to google a method to make a string all caps in JS.

makeUpperCase(pangram) -->  ['THE', 'QUICK', 'BROWN', 'FOX', 'JUMPS', 'OVER', 'THE', 'LAZY', 'DOG']

makeUpperCase(quote) -->  ['SUCKING', 'AT', 'SOMETHING', 'IS', 'THE', 'FIRST',
'STEP', 'TOWARDS', 'BEING', 'KINDA', 'GOOD', 'AT', 'SOMETHING']
*/
function makeUpperCase(string){
  let arrayOfWords = string.split(" ")
  let upperCaseArray = arrayOfWords.map((word)=>{
    return word.toUpperCase()
  })
  return upperCaseArray
}

//console.log("Make pangram upper case:", makeUpperCase(pangram))
//console.log("Make quote upper case:", makeUpperCase(quote))


/* LEVEL FOUR
Write a function that takes in a string and returns the words in that string as a single object.  The object's keys will be numbers representing the length of each word.  The values will be arrays containing the appropriate words. 

reorganizeWords(panagram) -->  {
  '3': [ 'the', 'fox', 'the', 'dog' ],
  '4': [ 'over', 'lazy' ],
  '5': [ 'quick', 'brown', 'jumps' ]
}
reorganizeWords(quote) -->  {
  '2': [ 'at', 'is', 'at' ],
  '3': [ 'the' ],
  '4': [ 'step', 'good' ],
  '5': [ 'first', 'being', 'kinda' ],
  '7': [ 'sucking', 'towards' ],
  '9': [ 'something', 'something' ]
}
*/
function reorganizeWords(string){
  let stringArray = string.split(" ")


  let newObject = stringArray.reduce((acc,word)=>{
    acc[word.length] = stringArray.filter((string) => string.length === word.length)
    return acc
  },{})

  return newObject
}

console.log(reorganizeWords(pangram))
console.log(reorganizeWords(quote))