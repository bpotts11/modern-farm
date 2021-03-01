import { usePlant } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

//random 3x6 array of plant plan
const yearlyPlan = createPlan()
console.table(yearlyPlan)


const allPlants = plantSeeds(yearlyPlan)
console.log('allPlants: ', allPlants);


let harvest = harvestPlants(allPlants)
console.log('harvest: ', harvest);