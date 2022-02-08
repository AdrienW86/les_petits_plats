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
export function creationDesListbox(array, arrayTag) {
  let arrayIngredients = []; let arrayAppareils = []; let arrayUstensils = []
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

  console.table(arrayUstensils)
  // On supprime l'élement tagué dans la liste
  if(arrayTag) {
   arrayTag.forEach(tag => {
      if(arrayIngredients.includes(tag)) {
        arrayIngredients.splice(arrayIngredients.indexOf(tag), 1)
      }
      else if(arrayAppareils.includes(tag)) {
        arrayAppareils.splice(arrayAppareils.indexOf(tag), 1)
      }else if(arrayUstensils.includes(tag)) {
        arrayUstensils.splice(arrayUstensils.indexOf(tag), 1)
      }
   })   
  }

  let list = document.querySelector(".list-li0")
  let list1 = document.querySelector(".list-li1")
  let list2 = document.querySelector(".list-li2")

  let search = document.querySelector(".find0")
  let search1 = document.querySelector(".find1")
  let search2 = document.querySelector(".find2")
  
  afficherMessage(arrayIngredients, list, search)
  afficherMessage(arrayAppareils, list1, search1)
  afficherMessage(arrayUstensils, list2, search2)

  ////////////////////////////////////////////////////

 
  
  /// et réaliser la boucle native de la fonction search ////

  
  


  const listIngredients = new Listbox(arrayIngredients, arrayAppareils, arrayUstensils )
  listIngredients.buildArray() 
}

function afficherMessage (array, target, search) {
  let message = document.createElement("div")
      message.setAttribute("class", "message")
      message.innerHTML = "Aucun élément à afficher !"
      target.appendChild(message)
      if(array.length == 0) {
        message.style.display = "block"
        search.style.display = "none"
      }else{
        message.style.display = "none"
        search.style.display = "block"
      }
}

function changeAccent(element) {
   return element
      .replace(/[àäâ]/g, "a")
      .replace(/[ç]/g, "c")
      .replace(/[éèêë]/g, "e")
      .replace(/[îï]/g, "i")
      .replace(/[ôö]/g, "o")
      .replace(/[ùûû]/g, "u");
}