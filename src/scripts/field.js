let field = []

// adds each vegetable object/array to the field array 
export const addPlants = (seed) => {
    if (Array.isArray(seed)) {
        seed.forEach(item => field.push(item));
    } else {
        field.push(seed)
    }
}

export const usePlants = () => {
    return field.slice()
}