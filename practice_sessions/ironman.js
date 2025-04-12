/*
Ironman - JS Iteration Station practice

To run the code in this file, run the command:
  node practice_sessions/ironman.js
*/ 
console.log("ironman.js is running\n")


const ironmanData = {
  swim: [
    { name: "John Doe", age: 34, time: 55, triclub: "Endurance Warriors" },
    { name: "Sarah Lee", age: 29, time: 50, triclub: "Peak Performers" },
    { name: "Mike Tran", age: 41, time: 62, triclub: "Speed Demons" },
    { name: "Emily Chen", age: 34, time: 58, triclub: "Iron Eagles" },
    { name: "David Kim", age: 29, time: 54, triclub: "Iron Eagles" },
    { name: "Linda Park", age: 35, time: 60, triclub: "Peak Performers" },
    { name: "Carlos Reyes", age: 37, time: 57, triclub: "Aqua Flyers" },
    { name: "Nina Gupta", age: 34, time: 52, triclub: "Iron Eagles" }
  ],
  bike: [
    { name: "John Doe", age: 34, time: 300, triclub: "Endurance Warriors" },
    { name: "Sarah Lee", age: 29, time: 290, triclub: "Peak Performers" },
    { name: "Mike Tran", age: 41, time: 320, triclub: "Speed Demons" },
    { name: "Emily Chen", age: 34, time: 310, triclub: "Iron Eagles" },
    { name: "David Kim", age: 29, time: 295, triclub: "Iron Eagles" },
    { name: "Linda Park", age: 35, time: 315, triclub: "Peak Performers" },
    { name: "Carlos Reyes", age: 37, time: 305, triclub: "Aqua Flyers" },
    { name: "Nina Gupta", age: 34, time: 285, triclub: "Iron Eagles" }
  ],
  run: [
    { name: "John Doe", age: 34, time: 210, triclub: "Endurance Warriors" },
    { name: "Sarah Lee", age: 29, time: 200, triclub: "Peak Performers" },
    { name: "Mike Tran", age: 41, time: 230, triclub: "Speed Demons" },
    { name: "Emily Chen", age: 34, time: 215, triclub: "Iron Eagles" },
    { name: "David Kim", age: 29, time: 205, triclub: "Iron Eagles" },
    { name: "Linda Park", age: 35, time: 225, triclub: "Peak Performers" },
    { name: "Carlos Reyes", age: 37, time: 210, triclub: "Aqua Flyers" },
    { name: "Nina Gupta", age: 34, time: 198, triclub: "Iron Eagles" }
  ]
};

/* Level 1

Write a function that takes in an event and returns the average time for that event across all athletes.

*Average is calculated by adding up all the times then dividing by the total number of times that were added.

*Don't worry about rounding numbers.

calculateAverage('swim')  ---> 56
calculateAverage('run')  ---> 211.6
calculateAverage('bike')  ---> 302.5


Start with:
- What part(s) of the data do I need to access?  How will I access it? 
- What are the steps that I need to take to achieve this larger goal?

As you work:
- At any point you should be able to explain what you're trying to do with any given line of code you're writing.
*/


function calculateAverage(event){
  let eventArray = ironmanData[event]

  let timeSum = eventArray.reduce((acc,athlete)=>{
    acc += athlete.time
    return acc
  },0)
  
  let averageTime = timeSum/eventArray.length
  return averageTime
}

console.log(calculateAverage('swim'))
console.log(calculateAverage('run'))


/* Level 2

Modify your function so that it takes in an age in addition to the event and now only returns the average time for that event for athletes of that age.

calculateAverage('swim', 29)  ---> 52
calculateAverage('swim', 34)  ---> 55
calculateAverage('swim', 41)  ---> 62

Start with:
- What part(s) of the data do I need to access?  How will I access it?
  - Has this changed from part 1?
- What are the steps that I need to take to achieve this larger goal?
  - Do I need to change the logic in part one?  Or is there just an additional step(s) to add.  Where/when do I include that added step?
- HINT:  Do not try to shove more logic within your existing iteration.  Instead, identify and separate step that you can implement then refactor slightly to use what you're already written.

As you work:
- At any point you should be able to explain what you're trying to do with any given line of code you're writing.
*/

function calculateAverageByAge(event,age){
  let eventArray = ironmanData[event]

  let filteredArray = eventArray.filter((athlete) => athlete.age === age)

  let timeSum = filteredArray.reduce((acc,athlete)=>{
    acc += athlete.time
    return acc
  },0)

  let averageTime = timeSum/filteredArray.length
  return averageTime

}

console.log(calculateAverageByAge('swim', 29))
console.log(calculateAverageByAge('swim', 34))
console.log(calculateAverageByAge('swim', 41))

/* Level 3

Write a function that takes in an event and returns the name of the athlete with the fastest time in that event.

findTopPerformer('swim') --> "Sarah Lee"
findTopPerformer('run') --> "Nina Gupta"

Start with:
- What does it mean to be the “top performer” in this context?
- What comparisons do I need to make during the iteration?
- What information do I need to keep track of as I go?

As you work:
- What do you need to compare across athletes to determine who the top performer is?
- What might you need to keep track of as you go?
- There are a couple of ways you could approach this — think about how you'd solve this problem with paper and a highlighter first.
- As always: console log early, console log often.
- At any point you should be able to explain what you're trying to do with any given line of code you're writing.
*/

function findTopPerformer(event){
  let eventArray = ironmanData[event]

  let timeArray = eventArray.reduce((acc,athlete)=>{
    acc.push(athlete.time)
    return acc
  },[])

  let minTime = Math.min(...timeArray)

  let fastestAthlete = eventArray.filter((athlete)=> athlete.time === minTime)

  return fastestAthlete[0].name

}

console.log(findTopPerformer('swim'))
console.log(findTopPerformer('run'))

/* Level 4

Write a function that takes in an event and returns an object where each key is a triclub name and each value is all the times for athletes from that triclub in that event.

calculateAverageByClub('swim'); --> 
{
  'Endurance Warriors': [ 55 ],
  'Peak Performers': [ 50, 60 ],
  'Speed Demons': [ 62 ],
  'Iron Eagles': [ 58, 54, 52 ],
  'Aqua Flyers': [ 57 ]
}

Start with:
- What’s the first thing I need to do to access just the data for that event?
- How do I group entries by triclub?

As you work:
- How can I determine the triclub for each athlete?
- What might be a good way to group athletes by their triclub?
- What kind of structure do I need to build up (object with arrays as values)?
- What should I do when I come across a triclub I haven’t seen yet?
- Console log often: What does my result object look like after each iteration?
- At any point you should be able to explain what you're trying to do with any given line of code you're writing.
*/

function calculateAverageByClub(event){
  let eventArray = ironmanData[event]


  // let eventHash = eventArray.reduce((acc,athlete)=>{
  //   acc[athlete.triclub] = 
  //   return acc
  // },{})
  
}

console.log(calculateAverageByClub('swim'))