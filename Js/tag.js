import Recipe from "./class-recipes.js";
import { recipes } from "../recipes.js";
import { closeArray, getAllRecipe, creationDesListbox } from "./functions.js"

let nombreDeTags = 0
let tag
let tagContainer = document.querySelector(".tag-container")
export let arraySearchBar = []
// Création d'un tag
export function createTag(e) { 
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
    recetteByTag()   
    // On ferme la listbox    
    document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", createTag))
    document.querySelector(".search").value =""
    closeArray(e)  
}
// Suppression d'un tag 
export function deleteTag(e) {
  nombreDeTags --  
  e.target.parentElement.remove()         
    closeArray(e)
    removeListboxList()
  // On vide la liste des recetttes
    while(container.hasChildNodes()) {
      container.removeChild(container.lastChild)
    }    
    if(nombreDeTags >= 1) {  
      recetteByTag()  
    }else{     
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