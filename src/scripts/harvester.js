// return an array of seed objects
let harvestArray = []

// harvestPlants function must accept the plants array as input.
// The function will return an array of seed objects.
// Iterate the array of growing plants. On each plant, get the value of the output property.
// Add that many of the plant objects to the array that the function returns. 
export const harvestPlants = (plantArray) => {
    // debugger
    for (const plant of plantArray) {
        let output = plant.output
        if (plant.type === "Corn") {
            let cornOutput = output / 2
            for (let i = 0; i < cornOutput; i++) {
                harvestArray.push(plant)
            }
        } else {
            for (let i = 0; i < output; i++) {
                harvestArray.push(plant)
            }
        }
    }
    return harvestArray
}