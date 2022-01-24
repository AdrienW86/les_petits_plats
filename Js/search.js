import {recipes} from "../recipes.js"
import {buildArray, buildCustomArray, createTag} from "./functions.js"
import Recipe from "./class-recipes.js"


 
// Création de la liste des recettes complète
export function buildListRecipe () {   
  recipes.forEach(recette => {
    const listOfRecipes = new Recipe(recette)
      recipeArray.push(listOfRecipes)            
  })
  recipeArray.forEach(recette => {
    const list = new Recipe(recette)
          list.buildRecipe()
  })
}

// Barre de recherche globale
export function searchBar() {                      
  document.querySelector(".search").addEventListener("keyup", function(e) {
    let recherche = this.value.toLowerCase()
    let recettes = document.querySelectorAll(".fiche_recette")
    if(recherche.length > 2) {
      Array.prototype.forEach.call(recettes, function(recette) {
        if(recette.textContent.toLowerCase().indexOf(recherche) > -1) {
          recette.style.display = "block"
        }else {
          recette.style.display = "none"
        }
      })
    }
  })
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


////////////////////////////////////////////////////////////////////////////////////////////////////

export let filterIngredients = []
export let filterAppliances = []
export let filterUstensils = []


let recipeArray = []
let persoTag = false

let mainContainer = document.getElementsByTagName("main")
 

let container = document.querySelector(".tag-container").childNodes.length // le nombre de tag dans le container
export let TagSelected = []
console.log(TagSelected)

// Création du tableau des recettes filtrés à afficher

function creationTableauFiltre (e) {
  let tag = e.target.innerHTML.trimStart().trimEnd()
  recipes.filter(recipe => {
    recipe.ingredients.forEach(element => {
      recipe.ustensils.forEach(el => {
        let ingredient = element.ingredient.charAt(0).toUpperCase() + element.ingredient.substring(1).toLowerCase()
        let ustensil = el.charAt(0).toUpperCase() + el.substring(1).toLowerCase()
        let appareil = recipe.appliance.charAt(0).toUpperCase() + recipe.appliance.substring(1).toLowerCase()     
          if(ingredient == tag || appareil == tag || ustensil == tag) {
            TagSelected.push(recipe)
            console.log("ajouté aux tableaux")
          }
      })
    }) 
  })  
}

// Création des élements de recettes filtrés pour les listboxs

function creationDesListesFiltres() {
  TagSelected.forEach(recette => {
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
  TagSelected = [...new Set(TagSelected.sort())]
}





// Recherche par tags

export function createFilterTag(e) {

  let container = document.querySelector(".tag-container").childNodes.length // le nombre de tag dans le container
  createTag(e)
  creationTableauFiltre(e)
  creationDesListesFiltres()
  buildCustomArray()
  
  // Si je n'ai encore aucun tag
  // je dois créer un tag et un tableau correspondant aisni que les listbox filtrées
  // je dois supprimer la liste et en crée une nouvelle avec le tableau filtré
console.log(container)


 // On construit les listes personalisées en fonction des résultats de nos tableaux

 console.table(TagSelected)
  console.table(filterIngredients)
  console.table(filterUstensils)
  console.table(filterAppliances)
 

}
  
  
  
  




function filtrerTableau (tableauCourant, tableauFiltre) {
    // on vide le container des recettes
    let containerDesRecettes = mainContainer
    console.log(containerDesRecettes)
   console.table(TagSelected)
 


}

filtrerTableau()