import { addPlants, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


// need to "add plants" to the field array
export const plantSeeds = (plan) => {
    // debugger
    // console.table(plan)
    plan.forEach(row => {
        row.forEach(plant => {
            if (plant === "Asparagus") {
                addPlants(createAsparagus())
            }
            else if (plant === "Corn") {
                addPlants(createCorn())
            }
            else if (plant === "Potato") {
                addPlants(createPotato())
            }
            else if (plant === "Soybean") {
                addPlants(createSoybean())
            }
            else if (plant === "Sunflower") {
                addPlants(createSunflower())
            }
            else if (plant === "Wheat") {
                addPlants(createWheat())
            }
        })
    })
    return usePlants()
}