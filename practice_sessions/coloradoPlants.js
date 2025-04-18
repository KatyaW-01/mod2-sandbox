/*
Colorado Plants - JS Iteration Station practice

To run the code in this file, run the command:
  node practice_sessions/coloradoPlants.js
*/ 
console.log("coloradoPlants.js is running")


const coloradoPlants = [
  {
    name: "Colorado Blue Columbine",
    scientificName: "Aquilegia caerulea",
    bloomingSeason: "Spring to Early Summer",
    habitat: "meadows",
    height: 12,
  },
  {
    name: "Aspen Tree",
    scientificName: "Populus tremuloides",
    bloomingSeason: "Spring",
    habitat: "forests",
    height: 100,
  },
  {
    name: "Columbian Lily",
    scientificName: "Lilium columbianum",
    bloomingSeason: "Late Spring to Early Summer",
    habitat: "moutains",
    height: 24,
  },
  {
    name: "Rocky Mountain Bristlecone Pine",
    scientificName: "Pinus aristata",
    bloomingSeason: "Spring",
    habitat: "mountains",
    height: 120,
  },
  {
    name: "Alpine Forget-Me-Not",
    scientificName: "Myosotis alpestris",
    bloomingSeason: "Summer",
    habitat: "meadows",
    height: 6,
  },
  {
    name: "Indian Paintbrush",
    scientificName: "Castilleja spp.",
    bloomingSeason: "Spring to Summer",
    habitat: "grasslands",
    height: 18,
  },
  {
    name: "Engelmann Spruce",
    scientificName: "Picea engelmannii",
    bloomingSeason: "Spring",
    habitat: "forests",
    height: 180,
  },
  {
    name: "Fireweed",
    scientificName: "Chamerion angustifolium",
    bloomingSeason: "Summer",
    habitat: "meadows",
    height: 36,
  },
  {
    name: "Blue Spruce",
    scientificName: "Picea pungens",
    bloomingSeason: "Spring",
    habitat: "forests",
    height: 72,
  },
  {
    name: "Scarlet Gilia",
    scientificName: "Ipomopsis aggregata",
    bloomingSeason: "Late Spring to Summer",
    habitat: "mountains",
    height: 24,
  },
];

/* 
Write a function that creates an object which organizes the plants by habitat.

organizeByHabitat() // expected result ==> 
  {
    meadows: [ 'Colorado Blue Columbine', 'Alpine Forget-Me-Not',      'Fireweed' ],
    forests: [ 'Aspen Tree', 'Engelmann Spruce', 'Blue Spruce' ],
    moutains: [ 'Columbian Lily' ],
    mountains: [ 'Rocky Mountain Bristlecone Pine', 'Scarlet Gilia' ],
    grasslands: [ 'Indian Paintbrush' ]
  }

Start with:
- What part(s) of the data do I need to access?  How will I access it?
  - Has this changed from part 1?
- What are the steps that I need to take to achieve this larger goal?
  - Do I need to change the logic in part one?  Or is there just an additional step(s) to add.  Where/when do I include that added step?

As you work:
- At any point you should be able to explain what you're trying to do with any given line of code you're writing.
- Think through the code you're writing iteration by iteration. What data is it looking at each iteration, what do you want to do while it's look at that piece of data?

*/

function organizeByHabitat(){
  let organized = coloradoPlants.reduce((acc,plant)=>{
    if (!acc[plant.habitat]){
      acc[plant.habitat] = []
    }
    acc[plant.habitat].push(plant.name)
    return acc
  },{})
  return organized
}

console.log(organizeByHabitat())

// function organizeByHabitat() {
//   let result = coloradoPlants.reduce ((acc, current)=> {
//       if(acc[current.habitat]) {
//         acc[current.habitat].push(current.name)}
//       else {
//         acc[current.habitat] = [current.name]
//       }
//       return acc
//   }, {})
//   return result
//   }
//   console.log(organizeByHabitat())