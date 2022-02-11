import { creationDesListbox, messageRecette, getAllRecipe } from "./functions.js"
import { recipes } from "../recipes.js"
import { removeListboxList,  recetteByTag, arraySearchBar } from "./tag.js"

let array = []
let filterRecipes = []

// Barre de recherche globale version native
export function searchBar2(e) {
  let newArray = []
  let input = e.target.value.toLowerCase()
  let tagContainer = document.querySelector(".tag-container").childNodes.length
    // On vide les listbox et les recettes
    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }
    removeListboxList()
      // On détermine si la liste est déjà filtrée ou non
      if(tagContainer == 0) {
        array = recipes
          // On vérifie que le champ de texte est supérieur à 2
          if(input.length > 2) {
            for(let i = 0; i < array.length; i++) {
              console.log(array[i].ustensils)
              if(array[i].appliance.toLowerCase().includes(input)
                || array[i].description.toLowerCase().includes(input)
                || array[i].name.toLowerCase().includes(input)
                || array[i].ustensils.includes(input)) {
                  newArray.push(array[i])
              }
              for(let j = 0; j < array[i].ingredients.length; j++) {
                if(array[i].ingredients[j].ingredient.includes(input)) {
                  newArray.push(array[i])
                }
              }
            }filterRecipes =[...new Set(newArray)]       
            getAllRecipe(filterRecipes)
            creationDesListbox(filterRecipes)
          // Si le champ de recherche est inférieur à 2 et le container est vide
          }else{
            getAllRecipe(recipes)
            creationDesListbox(recipes)
          }
        // Si le container est supérieur à 0
      }else {
        if(input.length > 2) {
          for(let i = 0; i < arraySearchBar.length; i++) {
            if(arraySearchBar[i].appliance.toLowerCase().includes(input)
              || arraySearchBar[i].description.toLowerCase().includes(input)
              || arraySearchBar[i].name.toLowerCase().includes(input)
              || arraySearchBar[i].ustensils.includes(input)) {
                newArray.push(arraySearchBar[i])
            }
            for(let j = 0; j < arraySearchBar[i].ingredients.length; j++) {
              if(arraySearchBar[i].ingredients[j].ingredient.toLowerCase().includes(input)) {
                newArray.push(arraySearchBar[i])
              }
            }
          }filterRecipes =[...new Set(newArray)]       
            getAllRecipe(filterRecipes)
            creationDesListbox(filterRecipes)  
        }else{
          recetteByTag(array)
        }
      }
      messageRecette()
}
// Barre de recherche des tableaux
export function searchArray() {
    document.querySelectorAll(".find").forEach(input => input.addEventListener("keyup", function(e){
        let recherche = this.value.toLowerCase()
        let elements = document.querySelectorAll(".option")
            Array.prototype.forEach.call(elements, function(element) {
                if(element.textContent.toLowerCase().indexOf(recherche) > -1) {
                    element.style.display = "flex"
                }else {
                   element.style.display = "none"
                }
            })
    }))
}
