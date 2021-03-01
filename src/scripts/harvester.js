// return an array of seed objects
let harvestArray = []

// harvestPlants function must accept the plants array as input.
export const harvestPlants = (plantArray) => {
    // debugger
    // Iterate the array of growing plants. On each plant, get the value of the output property.
    for (const plant of plantArray) {
        let output = plant.output
        // Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
        if (plant.type === "Corn") {
            let cornOutput = output / 2
            // Add that many of the plant objects to the array that the function returns. 
            for (let i = 0; i < cornOutput; i++) {
                harvestArray.push(plant)
            }
        } else {
            // Add that many of the plant objects to the array that the function returns. 
            for (let i = 0; i < output; i++) {
                harvestArray.push(plant)
            }
        }
    }
    // The function will return an array of seed objects.
    return harvestArray
}