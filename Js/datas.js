import {recipes} from "../recipes.js"

// Initialisation des différents tableaux
const recettes = []
const listIngredients = []

const ustensils = []
const listUstensils = []

const appareils = []
const listAppareils = []

// Création de la liste des recettes
recipes.forEach(recette => {
    recettes.push(recette.ingredients)
    ustensils.push(recette.ustensils)
    appareils.push(recette.appliance)
})

// On filtre les ingrédients
recettes.forEach(element => {
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
console.log(data)

export {uniqueIngredient, uniqueAppareil, uniqueUstensil}