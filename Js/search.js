import { creationDesListbox, messageRecette, getAllRecipe } from "./functions.js"
import { recipes } from "../recipes.js"
import { removeListboxList,  recetteByTag, arraySearchBar } from "./tag.js"

let array = []
export let filterRecipes = []

// Barre de recherche globale
export function searchBar(e) { 
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
        if(input.length > 2 ) { 
          array.forEach(recette => {        
            if(recette.appliance.toLowerCase().includes(input) 
              || recette.description.toLowerCase().includes(input)
              || recette.name.toLowerCase().includes(input)
              || recette.ustensils.includes(input)) {
              newArray.push(recette)
            }
            recette.ingredients.forEach(ingredient => {
              if(ingredient.ingredient.toLowerCase().includes(input)) {
                newArray.push(recette)
              }
            })
          })
          filterRecipes =[...new Set(newArray)]      
          getAllRecipe(filterRecipes)
          creationDesListbox(filterRecipes)
         // Si le champ de recherche est inférieur à 2 et le container est vide
        }else {
          getAllRecipe(recipes)
          creationDesListbox(recipes)
        }
     // Si le container est supérieur à 0
    }else { 
        if(input.length > 2) {         
          arraySearchBar.forEach(recette => {        
            if(recette.appliance.toLowerCase().includes(input) 
              || recette.description.toLowerCase().includes(input)
              || recette.name.toLowerCase().includes(input)
              || recette.ustensils.includes(input)) {
              newArray.push(recette)
            }
            recette.ingredients.forEach(ingredient => {
              if(ingredient.ingredient.toLowerCase().includes(input)) {
                newArray.push(recette)
              }
            })
          })
          filterRecipes =[...new Set(newArray)]       
          getAllRecipe(filterRecipes)
          removeListboxList()
          creationDesListbox(filterRecipes)          
        }else{
          removeListboxList()
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