/*
  node practice_sessions/fourteeners.js
*/ 
console.log("fourteeners.js is running")

/* 
Practice dealing with a large amount of complex data.  
  Slowly and carefully dig into the data to get to what you need.  
  Collapse views in vsCode to help.

 Practice accessing data within objects in a complex way.
  Use dot notation if you can type in the exact hardcoded key.
  Use bracket notation if you're using a variable or parameter to access the key
*/

const fourteeners = {
  frontRange: {
    numberOfPeaks : 6,
    highestPeak : 'Gray\'s Peak',
    peaks : {
      graysPeak : {
        elevation : 14270,
        rank : 9,
        forest : 'Arapaho',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'critical',
        numberOfRoutes : 4,
        routes : [
          {
            routeName: 'northSlopes', 
            mileage : 8,
            gain : 3000,
            difficulty : 'class 1',
            exposure : 1
          },
          {
          routeName: 'southRidge',
            mileage : 7,
            gain : 3250,
            difficulty : 'class 2',
            exposure : 2
          },
          {
          routeName: 'lostRatCouloir',
            mileage : 6.5,
            gain : 3000,
            difficulty : 'class 3',
            exposure : 3
          },
          {
          routeName: 'southWestRidge',
            mileage : 10.25,
            gain : 3800,
            difficulty : 'class 2',
            exposure : 1
          }
        ]
      },
      torreysPeak : {
        elevation : 14267,
        rank : 11,
        forest : 'Arapaho',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'critical',
        numberOfRoutes : 6,
        routes : [
          {
          routeName: 'southSlopes',
            mileage : 8,
            gain : 3000,
            difficulty : 'class 2',
            exposure : 1
          },
          {
            routeName: 'kelsoRidge',
            mileage : 6.75,
            gain : 3100,
            difficulty : 'class 3',
            exposure : 4
          },
          {
            routeName: 'deadDogCouloir',
            mileage : 6.5,
            gain : 3000,
            difficulty : 'class 3',
            exposure : 3
          },
          {
            routeName: 'tuningFork',
            mileage : 10.5,
            gain : 4500,
            difficulty : 'class 2+',
            exposure : 2
          },
          {
            routeName: 'emperorCouloir',
            mileage : 9.5,
            gain : 4500,
            difficulty : 'class 3',
            exposure : 3
          },
          {
            routeName: 'westRidge',
            mileage : 10,
            gain : 5500,
            difficulty : 'class 2',
            exposure : 2
          }
        ]
      },
      longsPeak : {
        elevation : 14255,
        rank : 15,
        forest : 'Rocky Mountain National Park',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 3,
        routes : [
          {
            routeName: 'keyhole',
            mileage : 14.5,
            gain : 5100,
            difficulty : 'class 3',
            exposure : 4
          },
          {
            routeName: 'loft',
            mileage : 13,
            gain : 5300,
            difficulty : 'class 3',
            exposure : 4
          },
          {
            routeName: 'keplingersCouloir',
            mileage : 16,
            gain : 5900,
            difficulty : 'class 3',
            exposure : 4
          }
        ]
      },
      mountEvans : {
        elevation : 14262,
        rank : 14,
        forest : 'Arapaho',
        grizzlyBears : false,
        marmots : true,
        jerryLevel: 'critical',
        numberOfRoutes : 4,
        routes : [
          {
            routeName: 'westRidge',
            mileage : 17,
            gain : 5600,
            difficulty : 'class 2',
            exposure : 2
          },
          {
            routeName: 'northeastFace',
            mileage : 3.5,
            gain : 1475,
            difficulty : 'class 2',
            exposure : 1
          },
          {
            routeName: 'northFace',
            mileage : 2,
            gain : 1500,
            difficulty : 'class 3',
            exposure : 4
          }
        ]
      },
      mountBierstadt : {
        elevation : 14060,
        rank : 38,
        forest : 'Arapaho',
        grizzlyBears: false,
        marmots : true,
        jerryLevel : 'critical',
        numberOfRoutes : 2,
        routes : [
          {
            routeName: 'westSlopes',
            mileage : 7,
            gain : 2850,
            difficulty : 'class 2',
            exposure : 1
          },
          {
            routeName: 'eastRidge',
            mileage : 5,
            gain : 3000,
            difficulty : 'class 3',
            exposure : 4
          }
        ]
      },
      pikesPeak : {
        elevation : 14100,
        rank : 30,
        forest : 'Pike',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'extreme',
        numberOfRoutes : 2,
        routes : [
          {
            routeName: 'eastSlopes',
            mileage : 26,
            gain : 7500,
            difficulty : 'class 1',
            exposure : 0
          },
          {
            routeName: 'northwestSlopes',
            mileage : 14,
            gain : 4300,
            difficulty : 'class 2',
            exposure : 1
          }
        ]
      }
    }
  },
  sangreDeCristoRange : {
    numberOfPeaks : 10,
    highestPeak : 'Blanca Peak',
    peaks : {
      blancaPeak : {
        elevation : 14345,
        rank : 4,
        forest : 'Rio Grande',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 1,
        routes : [
          {
            routeName: 'northwestRidge',
            mileage : 17,
            gain : 6500,
            difficulty : 'class 2+',
            exposure : 3
          }
        ]
      },
      ellingwoodPoint : {
        elevation : 14042,
        rank : 42,
        forest : 'Rio Grande',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 3,
        routes : [
          {
            routeName: 'southFace',
            mileage : 17,
            gain : 6200,
            difficulty : 'class 2+',
            exposure : 2
          },
          {
            routeName: 'southwestRidge',
            mileage : 15,
            gain : 2200,
            difficulty : 'class 3',
            exposure : 4
          },
          {
            routeName: 'northRidgeViaSouthZapataCreek',
            mileage : 11.6,
            gain : 5500,
            difficulty : 'class 3',
            exposure : 3
          }
        ]
      },
      littleBearPeak : {
        elevation : 14037,
        rank : 44,
        forest : 'Rio Grande',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 1,
        routes : [
          {
            routeName: 'westRidge',
            mileage : 14,
            gain : 6200,
            difficulty : 'class 4',
            exposure : 4
          }
        ]
      },
      mountLindsey : {
        elevation : 14042,
        rank : 43,
        forest : 'San Isabel',
        grizzlyBears : false,
        marmots : true,
        jerryLevel : 'low',
        numberOfRoutes : 3,
        routes : [
          {
            routeName: 'northwestGully',
            mileage : 8.25,
            gain : 3500,
            difficulty : 'class 3',
            exposure : 3
          },
          {
            routeName: 'northwestRidge',
            mileage: 8.25,
            gain: 3500,
            difficulty: 'class 3',
            exposure: 4
          },
          {
            routeName: 'northCouloir',
            mileage: 8.75,
            gain: 3900,
            difficulty: 'class 2',
            exposure: 2
          }
        ]
      },
      crestonePeak: {
        elevation: 14294,
        rank: 7,
        forest: 'San Isabel',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: [
          {
            routeName: 'southFace',
            mileage: 14,
            gain: 5700,
            difficulty: 'class 3',
            exposure: 4
          }
        ]
      },
      crestoneNeedle: {
        elevation: 14197,
        rank: 19,
        forest: 'San Isabel',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: [
          {
            routeName: 'southFace',
            mileage: 12,
            gain: 4400,
            difficulty: 'class 3',
            exposure: 4
          },
          {
            routeName: 'ellingwoodArete',
            mileage: 11.25,
            gain: 4400,
            difficulty: 'class 5',
            exposure: 5
          }
        ]
      },
      humboldtPeak: {
        elevation: 14064,
        rank: 37,
        forest: 'San Isabel',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 3,
        routes: [
          {
            routeName: 'westRidge',
            mileage: 11,
            gain: 4200,
            difficulty: 'class 2',
            exposure: 2
          },
          {
            routeName: 'eastRidge',
            mileage: 8,
            gain: 4300,
            difficulty: 'class 2',
            exposure: 3
          },
          {
            routeName: 'southeastGully',
            mileage: 8,
            gain: 5400,
            difficulty: 'class 2',
            exposure: 2
          }
        ]
      },
      kitCarsonPeak: {
        elevation: 14165,
        rank: 23,
        forest: 'Rio Grande',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 4,
        routes: [
          {
            routeName: 'viaChallengerPoint',
            mileage: 14.5,
            gain: 6250,
            difficulty: 'class 3',
            exposure: 3
          },
          {
            routeName: 'eastRidge',
            mileage: 14.5,
            gain: 5900,
            difficulty: 'class 3',
            exposure: 4
          },
          {
            routeName: 'northRidge',
            mileage: 11.4,
            gain: 5315,
            difficulty: 'class 4',
            exposure: 4
          },
          {
            routeName: 'outwardBoundCouloir',
            mileage: 13.75,
            gain: 5500,
            difficulty: 'class 3',
            exposure: 3
          }
        ]
      },
      challengerPoint: {
        elevation: 14081,
        rank: 34,
        forest: 'Rio Grande',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: [
          {
            routeName: 'northSlope',
            mileage: 12.5,
            gain: 5400,
            difficulty: 'class 2+',
            exposure: 2
          },
          {
            routeName: 'kirkCouloir',
            mileage: 12.75,
            gain: 5400,
            difficulty: 'class 3',
            exposure: 3
          }
        ]
      },
      culebraPeak: {
        elevation: 14047,
        rank: 41,
        forest: 'Cielo Vista Ranch',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: [
          {
            routeName: 'northwestRidge',
            mileage: 5,
            gain: 2700,
            difficulty: 'class 2',
            exposure: 2
          }
        ]
      }
    }
  },
  sanJuanRange : {
    numberOfPeaks: 14,
    highestPeak: 'Uncompahgre Peak',
    peaks: {
      uncompahgrePeak: {
        elevation: 14309,
        rank: 6,
        forest: 'Uncompahgre',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: [
          {
            routeName: 'southRidge',
            mileage: 7.5,
            gain: 3000,
            difficulty: 'class 2',
            exposure: 2
          },
        ]
      },
      mountWilson: {
        elevation: 14246,
        rank: 16,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 3,
        routes: [
          {
            routeName: 'northSlopes',
            mileage: 16,
            gain: 5100,
            difficulty: 'class 4',
            exposure: 4
          },
          {
            routeName: 'southwestSlopes',
            mileage: 12.5,
            gain: 4400,
            difficulty: 'class 3',
            exposure: 4
          },
          {
            routeName: 'eastFace',
            mileage: 12,
            gain: 4900,
            difficulty: 'class 3',
            exposure: 4
          }
        ]
      },
      wilsonPeak: {
        elevation: 14017,
        rank: 48,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: [
          {
            routeName: 'southwestRidge',
            mileage: 10,
            gain: 5000,
            difficulty: 'class 3',
            exposure: 4
          }
        ]
      },
      elDientePeak: {
        elevation: 14159,
        rank: 'unranked',
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 3,
        routes: [
          {
            routeName: 'northSlopes',
            mileage: 15,
            gain: 5000,
            difficulty: 'class 3',
            exposure: 3
          },
          {
            routeName: 'southSlopes',
            mileage: 12,
            gain: 4300,
            difficulty: 'class 3',
            exposure: 3
          },
          {
            routeName: 'northButtress',
            mileage: 5,
            gain: 3200,
            difficulty: 'class 4',
            exposure: 5
          }
        ]
      },
      mountSneffels: {
        elevation: 14150,
        rank: 27,
        forest: 'Uncompahgre',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'medium',
        numberOfRoutes: 2,
        routes: [
          {
            routeName: 'southSlopes',
            mileage: 6,
            gain: 2900,
            difficulty: 'class 3',
            exposure: 3
          },
          {
            routeName: 'southwestRidge',
            mileage: 6.5,
            gain: 2950,
            difficulty: 'class 3',
            exposure: 3
          }
        ]
      },
      mountEolus: {
        elevation: 14083,
        rank: 32,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: [
          {
            routeName: 'northeastRidge',
            mileage: 17,
            gain: 6100,
            difficulty: 'class 3',
            exposure: 4
          }
        ]
      },
      northEolus: {
        elevation: 14039,
        rank: 'unranked',
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: [
          {
            routeName: 'southRidge',
            mileage: 16.75,
            gain: 6000,
            difficulty: 'class 3',
            exposure: 3
          }
        ]
      },
      windomPeak: {
        elevation: 14082,
        rank: 33,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: [
          {
            routeName: 'westRidge',
            mileage: 17,
            gain: 6000,
            difficulty: 'class 2+',
            exposure: 3
          }
        ]
      },
      sunlightPeak: {
        elevation: 14059,
        rank: 39,
        forest: 'San Juan',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: [
          {
            routeName: 'southFace',
            mileage: 17,
            gain: 6000,
            difficulty: 'class 4',
            exposure: 5
          }
        ]
      },
      handiesPeak: {
        elevation: 14048,
        rank: 40,
        forest: 'n/a',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'medium',
        numberOfRoutes: 3,
        routes: [
          {
            routeName: 'southwestSlopes',
            mileage: 5.75,
            gain: 2500,
            difficulty: 'class 1',
            exposure: 1
          },
          {
            routeName: 'eastSlopes',
            mileage: 8,
            gain: 3650,
            difficulty: 'class 2',
            exposure: 2
          },
          {
            routeName: 'westSlopes',
            mileage: 5,
            gain: 2800,
            difficulty: 'class 2',
            exposure: 2
          }
        ]
      },
      redcloudPeak: {
        elevation: 14034,
        rank:46,
        forest: 'n/a',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 1,
        routes: [
          {
            routeName: 'northeastRidge',
            mileage: 9,
            gain: 3700,
            difficulty: 'class 2',
            exposure: 2,
          }
        ]
      },
      sunshinePeak: {
        elevation: 14001,
        rank: 53,
        forest: 'n/a',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 3,
        routes: [
          {
            routeName: 'viaRedcloudPeak',
            mileage: 12.25,
            gain: 4800,
            difficulty: 'class 2',
            exposure: 2
          },
          {
            routeName: 'northwestFace',
            mileage: 8.5,
            gain: 3800,
            difficulty: 'class 2+',
            exposure: 2
          },
          {
            routeName: 'eastRidge',
            mileage: 7,
            gain: 4600,
            difficulty: 'class 2',
            exposure: 2
          }
        ]
      },
      wetterhornPeak: {
        elevation: 14015,
        rank: 49,
        forest: 'Uncompahgre',
        grizzlyBears: false,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: [
          {
            routeName: 'southeastRidge',
            mileage: 7,
            gain: 3300,
            difficulty: 'class 3',
            exposure: 4
          },
          {
            routeName: 'eastFace',
            mileage: 6.5,
            gain: 3300,
            difficulty: 'class 3',
            exposure: 4
          }
        ]
      },
      sanLuisPeak: {
        elevation: 14014,
        rank: 50,
        forest: 'Gunnison',
        grizzlyBears: true,
        marmots: true,
        jerryLevel: 'low',
        numberOfRoutes: 2,
        routes: [
          {
            routeName: 'northeastRidge',
            mileage: 13.5,
            gain: 3600,
            difficulty: 'class 1',
            exposure: 0
          },
          {
            routeName: 'southRidge',
            mileage: 11,
            gain: 3700,
            difficulty: 'class 1',
            exposure: 1
          }
        ]
      }
    }
  }
}


// Level 1

//Write a function called findInfo that takes in a range and a specific peak.  The function should return the elevation of the specified peak in the specified range.

// Examples:
    // console.log(findElevation('sanJuanRange', 'sanLuisPeak'))
        //should return 14014

    // console.log(findElevation('sangreDeCristoRange', 'ellingwoodPoint'))
        //should return 14042

    // console.log(findElevation('frontRange', 'torreysPeak'))
        //should return 14267

    // console.log(findElevation('frontRange', 'mountBierstadt'))
        //should return 14060
        

function findElevation(range,peak){
  return fourteeners[range].peaks[peak].elevation
}
console.log(findElevation('sanJuanRange', 'sanLuisPeak'))
console.log(findElevation('sangreDeCristoRange', 'ellingwoodPoint'))
// Level 2

//Write a function called findInfo that takes in a range, a specific peak AND a specified datapoint.  The function should return the value of the specified datapoint for the specified peak in the specified range.

// Examples:
    // console.log(findInfo('sanJuanRange', 'sanLuisPeak', 'numberOfRoutes'))
        //should return 2

    // console.log(findInfo('sanJuanRange', 'sanLuisPeak', 'jerryLevel'))
        //should return 'low'

    // console.log(findInfo('frontRange', 'torreysPeak', 'elevation'))
        //should return 14267

    // console.log(findInfo('frontRange', 'mountBierstadt', 'forest'))
        //should return 'Arapaho'

function findInfo(range,peak,dataPoint){
  return fourteeners[range].peaks[peak][dataPoint]
}
console.log(findInfo('sanJuanRange', 'sanLuisPeak', 'numberOfRoutes'))
console.log(findInfo('sanJuanRange', 'sanLuisPeak', 'jerryLevel'))
console.log(findInfo('frontRange', 'torreysPeak', 'elevation'))
// Level 3

//Write a function called findInfo that takes in a range, a specific peak.  The function should return a string that states the number of routes that peak has that have at least 3000 feet of gain.

//Examples:
  // console.log(findHighGainRoutes('sanJuanRange', 'sanLuisPeak'))
      //should return 'This peak has 2 routes that have at least 3000 feet of gain.'

  // console.log(findHighGainRoutes('sangreDeCristoRange', 'ellingwoodPoint'))
      //should return 'This peak has 2 routes that have at least 3000 feet of gain.'

  // console.log(findHighGainRoutes('frontRange', 'torreysPeak'))
      //should return 'This peak has 6 routes that have at least 3000 feet of gain.'

  // console.log(findHighGainRoutes('frontRange', 'graysPeak'))
      //should return 'This peak has 4 routes that have at least 3000 feet of gain.'

function findHighGainRoutes(range,peak){
  let routes = fourteeners[range].peaks[peak].routes
  let filteredRoutes = routes.filter((route)=>route.gain >= 3000)
  return `This peak has ${filteredRoutes.length} routes that have at least 3000 feet of gain`
  
}
console.log(findHighGainRoutes('sanJuanRange', 'sanLuisPeak'))
console.log(findHighGainRoutes('sangreDeCristoRange', 'ellingwoodPoint'))
console.log(findHighGainRoutes('frontRange', 'torreysPeak'))
// Level 4

//Write a function called findInfo that takes in a range, a specific peak and a specified datapoint.  The function should return a string that states what total is achieved if hiking all routes for that peak, based on the specified datapoint.

//Examples:
  // console.log(findTotal('sanJuanRange', 'sanLuisPeak', 'mileage'))
      //should return 'If you hike every route for this peak you will achieve 24.5 total mileage!'

  // console.log(findTotal('sanJuanRange', 'sanLuisPeak', 'gain'))
      //should return 'If you hike every route for this peak you will achieve 7300 total gain!'

  // console.log(findTotal('frontRange', 'torreysPeak', 'gain'))
      //should return 'If you hike every route for this peak you will achieve 23600 total gain!'

  // console.log(findTotal('frontRange', 'graysPeak', 'mileage'))
      //should return 'If you hike every route for this peak you will achieve 31.75 total mileage!'

function findTotal(range,peak,dataPoint){
  let routes = fourteeners[range].peaks[peak].routes

  let sum = routes.reduce((acc,route)=>{
    acc += route[dataPoint]
    return acc
  },0)
  return `If you hike every route for this peak you will achieve ${sum} total ${dataPoint}!`
}
console.log(findTotal('sanJuanRange', 'sanLuisPeak', 'mileage'))
console.log(findTotal('sanJuanRange', 'sanLuisPeak', 'gain'))