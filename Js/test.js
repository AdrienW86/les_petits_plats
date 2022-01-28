import { recipes } from "../recipes.js";
import { closeArray, getAllRecipe } from "./functions.js"

let tagSelected = []
let nombreDeTags = 0
let precedentTableauDeRecette
let filterIngredients = []; let filterAppliances = []; let filterUstensils = []
let tag
let tagContainer = document.querySelector(".tag-container")
let previousArray = []


// Création d'un tag
export function createTag(e) {  
    nombreDeTags ++
    tag = e.target.innerHTML.trimStart().trimEnd()
   // On créé la strcuture Html du tag
     tagContainer.style.display = "flex"
      let div = document.createElement("div")
         div.innerHTML = `<p>${e.target.innerHTML}</p> <button class="btn-close-tag"> </button>`
         tagContainer.appendChild(div)
           if(e.target.value == "ingredient") {
             div.setAttribute("class","tag-ingredient")
           }
           else if(e.target.value == "appareil") {
             div.setAttribute("class","tag-appareil")
           }
           else if(e.target.value == "ustensil") {
             div.setAttribute("class","tag-ustensil")
           }  
     document.querySelectorAll(".btn-close-tag").forEach(btn => btn.addEventListener("click", deleteTag))    
   // On vide la liste des recetttes
    while(container.hasChildNodes()) {
       container.removeChild(container.lastChild)
    }
    // On adapte la méthode de filtrage selon le nombre de tags
      if(nombreDeTags == 1) {
        creationListesDeRecettes(e)
        getAllRecipe(tagSelected)   
      }
      else if(nombreDeTags > 1) {      
        ajouterPlusieursTags(tag, tagSelected)
        getAllRecipe(tagSelected)
      }
    // On ferme la listbox
    closeArray(e)
    previousArray.push(tagSelected)
    console.log(previousArray)
    console.log(nombreDeTags)
}
// Ajouter de nouveaux tags à partir du tableau filtré
function ajouterPlusieursTags(tag, array) {
  let newArray = []
    array.forEach(recette => {
      recette.ingredients.forEach(ingredient => {
        if(ingredient.ingredient == tag) {
            newArray.push(recette)
        }
      })  
    })
    array.forEach(recette => {
      if(recette.appliance == tag) {
        newArray.push(recette)       
      }           
  });
    array.forEach(recette => {
      recette.ustensils.forEach(ustensil => {
          ustensil = ustensil.charAt(0).toUpperCase() + ustensil.substring(1).toLowerCase()
          if(ustensil == tag) {             
            newArray.push(recette)          
          }
      })
  });
  tagSelected = [...new Set(newArray)]
}
// Création du tableau des recettes filtrées à afficher
function creationListesDeRecettes (e) {
     tag = e.target.innerHTML.trimStart().trimEnd()
    console.log(tag)   
        recipes.forEach(recette => {
            recette.ingredients.forEach(ingredient => {
                if(ingredient.ingredient == tag) {                   
                  tagSelected.push(recette)
                }
            })       
        });
        recipes.forEach(recette => {
            if(recette.appliance == tag) {
              tagSelected.push(recette)
            }           
        });
        recipes.forEach(recette => {
            recette.ustensils.forEach(ustensil => {
                ustensil = ustensil.charAt(0).toUpperCase() + ustensil.substring(1).toLowerCase()
                if(ustensil == tag) {                      
                  tagSelected.push(recette)
                }
            })
        });  
  precedentTableauDeRecette = [... new Set (tagSelected)]
  console.table(precedentTableauDeRecette)
    if(nombreDeTags > 1) {
      precedentTableauDeRecette = [... new Set (tagSelected)]
      console.table(precedentTableauDeRecette)    
    }      
}       
export function creationDesListbox() {
  tagSelected.forEach(recette => {
    filterAppliances.push(recette.appliance.charAt(0).toUpperCase() + recette.appliance.substring(1).toLowerCase())
      recette.ingredients.forEach(ingredient => {
        filterIngredients.push(ingredient.ingredient.charAt(0).toUpperCase() + ingredient.ingredient.substring(1).toLowerCase())
      })
      recette.ustensils.forEach(ustensil => {
        filterUstensils.push(ustensil.charAt(0).toUpperCase() + ustensil.substring(1).toLowerCase())
      })
  })
  filterIngredients = [...new Set(filterIngredients.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]
  filterAppliances = [...new Set(filterAppliances.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]
  filterUstensils = [...new Set(filterUstensils.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]
  tagSelected = [...new Set(tagSelected.sort())]
  console.log(tag)
  
    // On supprime le tag du tableau des élements
    const index1 = filterIngredients.indexOf(tag)
    const index2 = filterUstensils.indexOf(tag)
    const index3 = filterAppliances.indexOf(tag) 
    if(index1 > -1) {  
      filterIngredients.splice(index1, 1)   
    }else if(index2 > -1 ) {
      filterUstensils.splice(index3, 1)
    }else if(index3 > -1 ) {
      filterAppliances.splice(index2, 1)  
    }    
}
// Suppression d'un tag 
export function deleteTag(e) {
    nombreDeTags --
    e.target.parentElement.remove()   
      let listePrecedente = previousArray[nombreDeTags-1]
        console.table(previousArray)
        console.table(listePrecedente) 
        previousArray.pop()
        console.table(previousArray)
    closeArray(e)
    // On vide la liste des recetttes
    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild)
      }
    if(nombreDeTags > 0) {
      console.log(nombreDeTags)
      getAllRecipe(listePrecedente)
    }else{
      tagSelected = []
        getAllRecipe(recipes)                 
    } 
  }