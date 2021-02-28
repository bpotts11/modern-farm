import { usePlant } from "./field.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

//random 3x6 array of plant plan
const yearlyPlan = createPlan()
// console.log(yearlyPlan)





const allPlants = plantSeeds(yearlyPlan)
console.log('allPlants: ', usePlant());