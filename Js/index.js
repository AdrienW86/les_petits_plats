import {recipes} from "../recipes.js"
import Recipe from "./class-recipes.js"

console.table(recipes)

recipes.forEach(recette => {
    const listOfRecipes = new Recipe(recette)
    listOfRecipes.buildRecipe()
})