import { Catalog } from "./catalog.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { Quantity } from "./quantity.js"
import { plantSeeds } from "./tractor.js"

//random 3x6 array of plant plan
const yearlyPlan = createPlan()

//plant seeds w the plan created above
//returning an array of individual plants
plantSeeds(yearlyPlan)
let plantedSeeds = usePlants()

//create array with per #of objects of each plant
let harvest = harvestPlants(plantedSeeds)

// this orders the array in alphabetical order
// let harvest = harvestPlants(plantedSeeds).sort((a, b) => a.type.localeCompare(b.type))
// console.log('harvest: ', harvest);


// This section returns the total occurrences of each plant type

// let findOcc = (arr, key) => {
//     let arr2 = [];
//     arr.forEach((x) => {

//         // Checking if there is any object in arr2 which contains the key value
//         if (arr2.some((val) => { return val[key] == x[key] })) {

//             // If yes! then increase the occurrence by 1
//             arr2.forEach((k) => {
//                 if (k[key] === x[key]) {
//                     k["occurrence"]++
//                 }
//             })

//         } else {
//             // If not create a new object initialize it with the present iteration key's value & set the occurrence to 1
//             let a = {}
//             a[key] = x[key]
//             a["occurrence"] = 1
//             arr2.push(a);
//         }
//     })

//     return arr2
// }
// let key = "type"

// let totalHarv = findOcc(harvest, key)
// Quantity(totalHarv)



Catalog(harvest)