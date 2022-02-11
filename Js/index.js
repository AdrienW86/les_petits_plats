import { recipes } from "../recipes.js"
import { buildListbox } from "./listbox.js"
import { getAllRecipe, openArray, closeArray, creationDesListbox } from "./functions.js"
import { createTag, recetteByTag, removeListboxList } from "./tag.js"
import { searchArray, searchBar } from "./search.js"

// On affiche toutes les recettes
getAllRecipe(recipes)
// On créé les listbox
buildListbox()    
// On ajoute les données aux listbox
creationDesListbox(recipes)

// Les différents boutons
const openListboxIngredients = document.querySelectorAll(".select-btn0")
      openListboxIngredients.forEach(btn => btn.addEventListener("click", openArray))    
const openListboxAppareils = document.querySelectorAll(".select-btn1")
      openListboxAppareils.forEach(btn => btn.addEventListener("click", openArray))
const openListboxUstensils = document.querySelectorAll(".select-btn2")
      openListboxUstensils.forEach(btn => btn.addEventListener("click", openArray))

// Création de la recherche dans les listbox
searchArray()

// Boutons de la listbox
document.querySelectorAll(".btn-close").forEach(btn => btn.addEventListener("click", closeArray))
document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", createTag))

// Vider les recherches incomplètes
document.querySelectorAll(".find").forEach(input => input.addEventListener("blur", (event) => {   
      event.target.value ="" 
      let tagContainer = document.querySelector(".tag-container")
      while(container.hasChildNodes()) {
            container.removeChild(container.lastChild)
      }  
            if(tagContainer.childNodes.length > 0) {
                  removeListboxList()
                  recetteByTag()
            }else{
                  removeListboxList()
                  getAllRecipe(recipes) 
                  creationDesListbox(recipes)
            }  
      document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", createTag))
}))

// Barre de recherche
document.querySelectorAll(".search").forEach(input => input.addEventListener("keyup", searchBar))