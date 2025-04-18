/*
I object! - JS Iteration Station practice

To run the code in this file, run the command:
  node practice_sessions/i_object.js
*/ 
console.log("i_object.js is running")



const craftSupplies = {
  crossStitching: [
    { name: 'fabric', amountNeeded: 0.25 }, 
    { name: 'needle', amountNeeded: 1 }, 
    { name: 'thread', amountNeeded: 10 }, 
    { name: 'scissors', amountNeeded: 1 },
    { name: 'hoop', amountNeeded: 1 }
  ],
  weaving: [
    { name: 'loom', amountNeeded: 1 }, 
    { name: 'needle', amountNeeded: 1 }, 
    { name: 'yarn', amountNeeded: 6 }, 
    { name: 'scissors', amountNeeded: 1 }
  ],
  knitting: [    
    { name: 'needle', amountNeeded: 2 }, 
    { name: 'yarn', amountNeeded: 4 }, 
    { name: 'scissors', amountNeeded: 1 }
  ],
  crocheting: [
    { name: 'hook', amountNeeded: 1 }, 
    { name: 'yarn', amountNeeded: 3 }, 
    { name: 'scissors', amountNeeded: 1 }
  ]
};

// Write a function that takes in a parameter of craft and returns a list of supplies needed
function getSupplyList(craft){
  let craftArray = craftSupplies[craft]
  let supplies = craftArray.map((supply)=>{
    return supply.name
  })
  return supplies
}
console.log(getSupplyList('crossStitching')) 
//getSupplyList('crossStitching') 
    // --> ['fabric', 'needle', 'thread', 'scissors', hoop]

//getSupplyList('crocheting') 
    // --> ['hook', 'yarn', 'scissors']









    