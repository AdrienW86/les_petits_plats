import {recipes} from "../recipes.js"

// Initialisation des différents tableaux
const ingredients = []
const listIngredients = []

const ustensils = []
const listUstensils = []

const appareils = []
const listAppareils = []

// Création de la liste des recettes
recipes.forEach(recette => {
    ingredients.push(recette.ingredients)
    ustensils.push(recette.ustensils)
    appareils.push(recette.appliance)
})

// On filtre les ingrédients
ingredients.forEach(element => {
  element.forEach(produit => {
    listIngredients.push(produit.ingredient.charAt(0).toUpperCase() + produit.ingredient.substring(1).toLowerCase())  
  })
})
let uniqueIngredient = [...new Set( listIngredients.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]

// On filtre les ustensiles 
ustensils.forEach(ustensil => {
   ustensil.forEach(element => {
      listUstensils.push(element.charAt(0).toUpperCase() + element.substring(1).toLowerCase())     
   })
 })
let uniqueUstensil = [...new Set( listUstensils.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]

// On filtre les appareils 
appareils.forEach(appareil => {     
    listAppareils.push(appareil.charAt(0).toUpperCase() + appareil.substring(1).toLowerCase())   
})
let uniqueAppareil = [...new Set( listAppareils.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]

const data = []
data.push(uniqueIngredient, uniqueAppareil, uniqueUstensil)

export {data, uniqueIngredient, uniqueAppareil, uniqueUstensil}