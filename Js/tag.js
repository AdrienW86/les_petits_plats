import Recipe from "./class-recipes.js";
import { recipes } from "../recipes.js";
import { closeArray, getAllRecipe, creationDesListbox } from "./functions.js"
import { filterRecipes, searchBar } from "./search.js"
let nombreDeTags = 0
let tag
let tagContainer = document.querySelector(".tag-container")
let value = document.querySelector(".search").value
export let arraySearchBar = []

// Création d'un tag
export function createTag(e) { 
  let value = document.querySelector(".search").value
  value = value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
  nombreDeTags ++
  tag = e.target.innerHTML.trimStart().trimEnd()
    removeListboxList()
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
           div.setAttribute("value", e.target.value )
           document.querySelectorAll(".btn-close-tag").forEach(btn => btn.addEventListener("click", deleteTag)) 
     // On vide la liste des recetttes
    while(container.hasChildNodes()) {
       container.removeChild(container.lastChild)
    } 
    if(value) {
      recetteByTagAndSearch(value)
    }else{
      recetteByTag()
    }      
    // On ferme la listbox    
    document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", createTag))
    closeArray(e)  
}
// Suppression d'un tag 
export function deleteTag(e) {
  let value = document.querySelector(".search").value
  nombreDeTags --  
  e.target.parentElement.remove()         
    closeArray(e)
    removeListboxList()
    searchBar(e)
  // On vide la liste des recetttes
  console.log(filterRecipes)
    while(container.hasChildNodes()) {
      container.removeChild(container.lastChild)
    }       
    if(nombreDeTags == 0 && value) {   
    removeListboxList()
    getAllRecipe(filterRecipes)
    creationDesListbox(filterRecipes)
    }else if(nombreDeTags >= 1 && !value) { 
      removeListboxList()     
      recetteByTag()  
    }else if(nombreDeTags >= 1 && value){ 
      removeListboxList()
      recetteByTagAndSearch()   
    }else {        
      removeListboxList()
      getAllRecipe(recipes)   
      creationDesListbox(recipes)       
    }     
    document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", createTag))
}
  
// Création des listes après suppression
export function recetteByTag (array, arrayTag) {
  arrayTag = []
  array = []
    tagContainer.childNodes.forEach(tag => {    
      arrayTag.push(tag.innerText)                    
    })
    recipes.forEach(recette => {       
      let target = recette.ingredients
        if(arrayTag.every(tag => target.some(el => el.ingredient === tag 
          || recette.appliance.includes(tag) 
          || recette.ustensils.includes(tag.toLowerCase())))) {
          array.push(recette)
        }      
    })       
    array =[...new Set(array)]  
    array.forEach(recette => {
      const filterList = new Recipe(recette)
            filterList.buildRecipe()
    })
  creationDesListbox(array, arrayTag)
  arraySearchBar = [...new Set(array)]
}

export function recetteByTagAndSearch (value, array, arrayTag) {
  arrayTag = []
  array = []
    tagContainer.childNodes.forEach(tag => {    
      arrayTag.push(tag.innerText)
      arrayTag.push(value)                  
    })
    recipes.forEach(recette => {       
      let target = recette.ingredients
        if(arrayTag.every(tag => target.some(el => el.ingredient === tag 
          || recette.appliance.includes(tag) 
          || recette.ustensils.includes(tag))) 
          || (recette.description || recette.name).includes(value)) {
          array.push(recette)
        }      
    })      
    array =[...new Set(array)] 
    array.forEach(recette => {
      const filterList = new Recipe(recette)
            filterList.buildRecipe()
    })
  creationDesListbox(array, arrayTag)
  arraySearchBar = [...new Set(array)]
}

// Vider la liste des recettes
export function removeListboxList() {
  let list0 = document.querySelector(".list-li0")
  let list1 = document.querySelector(".list-li1")
  let list2 = document.querySelector(".list-li2")
    while(list0.hasChildNodes()) {
      list0.removeChild(list0.lastChild)
    }  
    while(list1.hasChildNodes()) {
      list1.removeChild(list1.lastChild)
    }  
    while(list2.hasChildNodes()) {
      list2.removeChild(list2.lastChild)
  }  
}