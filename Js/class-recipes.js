export default class Recipe {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.servings = data.servings
        this.ingredients = data.ingredients
    }

    buildRecipe() {
        const main = document.getElementById("container")

        const Card = document.createElement("section")
        main.appendChild(Card)

        headerCard.innerHTML = `<div class ="header-card">
                                    <div class = "body-card">
                                        <div class = "title"> </div>
                                        <div class = "ingredients"> </div>
                                        <div class = "recipe"> </div>
                                    </div>
                                </div>`
    }
}