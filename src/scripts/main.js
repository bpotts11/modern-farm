import { addPlant, usePlant } from "./field.js"
import { createPlan } from "./plan.js"


const yearlyPlan = createPlan()
console.log(yearlyPlan)

// import { createCorn } from "./seeds/corn.js"

// const cornSeed = createCorn()
// console.log(cornSeed)

addPlant()

let plantSeed = usePlant()