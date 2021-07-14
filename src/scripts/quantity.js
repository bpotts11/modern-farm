export const Quantity = (harvestFoodArray) => {
    const contentElement = document.querySelector(".container")

    harvestFoodArray.forEach((harvest) => {

        contentElement.innerHTML += `
        <section class="total">
            <div class="totalInfo">${harvest.type}</div>
            <div class="totalInfo">${harvest.occurrence}</div>
        </section>
        `
    })
}

