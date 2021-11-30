import {recipes} from "../recipes.js"
import Recipe from "./class-recipes.js"
import Listbox from "./class-listbox.js"

const recettes = []
const listIngredients = []

const ustensils = []
const listUstensils = []

const appareils = []
const listAppareils = []

// Création de la liste des recettes

recipes.forEach(recette => {
    const listOfRecipes = new Recipe(recette)
    listOfRecipes.buildRecipe()
    recettes.push(recette.ingredients)
    ustensils.push(recette.ustensils)
    appareils.push(recette.appliance)
})

// On filtre les ingrédients

recettes.forEach(element => {
  element.forEach(produit => {
    listIngredients.push(produit.ingredient)     
  })
})

let uniqueIngredient = [...new Set( listIngredients)]
console.table(uniqueIngredient)

// On filtre les ustensiles 

ustensils.forEach(ustensil => {
   ustensil.forEach(element => {
      listUstensils.push(element)     
   })
 })

let uniqueUstensil = [...new Set( listUstensils)]
console.table(uniqueUstensil)

// On filtre les appareils 

appareils.forEach(appareil => {     
    listAppareils.push(appareil)   
})

let uniqueAppareil = [...new Set( listAppareils)]
console.table(uniqueAppareil)

// Création des listbox 
let listbox = document.querySelector("listbox-ingredients")

uniqueIngredient.forEach(ingredient => {
 

})
const listboxIngredients = new Listbox(recipes)
listboxIngredients.ingredientsFilter()

const listboxAppareils = new Listbox(recipes)
listboxAppareils.appareilsFilter()

const listboxUstensils = new Listbox(recipes)
listboxUstensils.ustensilsFilter()