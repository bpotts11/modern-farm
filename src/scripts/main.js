import { Catalog } from "./catalog.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

//random 3x6 array of plant plan
const yearlyPlan = createPlan()
// console.table(yearlyPlan)

//plant seeds w the plan created above
//returning an array of individual plants
plantSeeds(yearlyPlan)
let plantedSeeds = usePlants()
// console.log('allPlants: ', allPlants);

//create array with per #of objects of each plant
let harvest = harvestPlants(plantedSeeds)
// console.log('harvest: ', harvest);


Catalog(harvest)