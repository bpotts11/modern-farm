let plantsGrowing = [

]

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        seed.forEach(item => plantsGrowing.push(item));
    } else {
        plantsGrowing.push(seed)
    }
}

export const usePlant = () => {
    return
    addPlant.splice()
}