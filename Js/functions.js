import Recipe from "./class-recipes.js"
import Listbox from "./class-listbox.js"
import { uniqueIngredient, uniqueUstensil, uniqueAppareil } from "./datas.js"


// Ouverture de la listbox
export function openArray(e) {  
  console.log(container)
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

// Afficher les données des listbox
export function getAllListbox() {   
  const listIngredients = new Listbox(uniqueIngredient, uniqueUstensil, uniqueAppareil)
        listIngredients.buildArray()   
}