/* To run the code in this file, run the command:
      node js_party/for_loops_playground.js
*/

//console.log("for_loops_playground.js is running")

// Exercise 1

// Uncomment the console log in the for loop to see how the value of i changes each loop.  Note that it loops 10 times but starts at 0.

for (var i = 0; i < 10; i++) {
   console.log(i);
}


// Exercise 2

// Uncomment the console log in the for loop to see how the changing value of i lets us access each element in the array one-at-a-time, loop-by-loop, using bracket notation.

var fruits = ['apples', 'oranges', 'bananas'];

for (var i = 0; i < fruits.length; i++) {
   console.log(`I have some ${fruits[i]}`);
}


// Exercise 3

// Write a simple for loop that will loop 4 times and print "I think I can." to the console.  (No array for this exercise, just looping 4 times.)
for (var i = 0; i < 4; i++){
  console.log("I think I can")
}


// Exercise 4

var mamboTeam = ['Angela', 'Pamela', 'Sandra', 'Rita']

// Write a for loop that console logs each member of the mambo team one at a time.
for(var i = 0; i < mamboTeam.length; i ++){
  console.log(mamboTeam[i])
}
// Expected result:
  //Angela
  //Pamela
  //Sandra
  //Rita

//Exercise 5

var nums = [10, 30, 20, 40, 60, 20]
var sum = 0
for (var i = 0; i < nums.length; i ++){
  sum += nums[i]
}
console.log(sum)
// Use a for loop to add up all the numbers in the nums array.  You'll want to look at each number one at a time and add it to the sum variable. Then, after the for loop, console log sum to confirm the expect result.
// Expected result: 180


// Exercise 6

var pets = [
  {
    name: 'Tilly',
    type: 'cat',
    favoriteTreat: 'cheese',
    human: 'Leta'
  },
  {
    name: 'Sodie',
    type: 'dog',
    favoriteTreat: 'milkbones',
    human: 'Amy'
  },
  {
    name: 'Pumpernickel',
    type: 'cat',
    favoriteTreat: 'kibble',
    human: 'Eric'
  }
];

// 6a. Using a for loop, print the following to the console (in this order!):
// Tilly
// Sodie
// Pumpernickel
for (var i = 0; i < pets.length; i ++){
  console.log(pets[i].name)
}


// 6b. Using a for loop, print the following sentences to the console (in this order!):
// Leta's cat, Tilly, loves cheese.
// Amy's dog, Sodie, loves milkbones.
// Eric's cat, Pumpernickel, loves kibble.
for (var i = 0; i < pets.length; i ++){
  console.log(`${pets[i].human}'s ${pets[i].type}, ${pets[i].name}, loves ${pets[i].favoriteTreat}.`)
}

