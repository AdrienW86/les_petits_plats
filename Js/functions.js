import Recipe from "./class-recipes.js"
import Listbox from "./class-listbox.js"

// Ouverture de la listbox
export function openArray(e) {  
  let listboxs = document.querySelectorAll(".listbox")
  let listboxopens = document.querySelectorAll(".listboxopen")
      listboxs.forEach(listbox => listbox.style.display = "flex")
      listboxopens.forEach(listboxopen => listboxopen.style.display = "none")
        e.target.closest(".listbox").style.display = "none"
        e.target.closest(".listbox").nextSibling.style.display = "flex"
}
// Fermeture de la listbox  
export function closeArray(e) {
  let list = document.querySelectorAll(".listbox")
  let array = document.querySelectorAll(".listboxopen")
  array.forEach(tab => tab.style.display = "none")
  list.forEach(listbox => listbox.style.display = "flex")
}
// Afficher toutes les recettes
export function getAllRecipe(array) {
  array.forEach(recette => {
    const listOfRecipes = new Recipe(recette)
          listOfRecipes.buildRecipe()          
  })
}
// Création des listbox filtrées
export function creationDesListbox(array) {
  let arrayIngredients = []; let arrayAppareils = []; let arrayUstensils = [];
  array.forEach(recette => {
    arrayAppareils.push(recette.appliance.charAt(0).toUpperCase() + recette.appliance.substring(1).toLowerCase())
      recette.ingredients.forEach(ingredient => {
        arrayIngredients.push(ingredient.ingredient.charAt(0).toUpperCase() + ingredient.ingredient.substring(1).toLowerCase())
      })
      recette.ustensils.forEach(ustensil => {
        arrayUstensils.push(ustensil.charAt(0).toUpperCase() + ustensil.substring(1).toLowerCase())
      })
  })
  arrayIngredients = [...new Set(arrayIngredients.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]
  arrayAppareils = [...new Set(arrayAppareils.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]
  arrayUstensils = [...new Set(arrayUstensils.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]
  array = [...new Set(array.sort())]


  const listIngredients = new Listbox(arrayIngredients, arrayAppareils, arrayUstensils )
        listIngredients.buildArray()  
}