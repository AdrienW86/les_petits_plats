import { recipes } from "../recipes.js";
import Recipe from "./class-recipes.js";
import { closeArray, getAllRecipe, creationListesDeRecettes, creationDesListbox } from "./functions.js"

let tagSelected = []
let newArray = []
let nombreDeTags = 0
let tag
let tagContainer = document.querySelector(".tag-container")

// Création d'un tag
export function createTag(e) { 
  nombreDeTags ++
  tag = e.target.innerHTML.trimStart().trimEnd()

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
      creationListesDeRecettes(e, recipes, tagSelected)
     // getAllRecipe(tagSelected)     
    }
    else if(nombreDeTags > 1) {      
      creationListesDeRecettes(e, tagSelected, newArray)
        tagSelected = [...new Set(newArray)]
        newArray = []
    } 
    creationDesListbox(tagSelected)
    // On ferme la listbox 
    getAllRecipe(tagSelected) 
      document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", createTag))
    closeArray(e)     
}

// Suppression d'un tag 
export function deleteTag(e) {
    nombreDeTags --  
    e.target.parentElement.remove()         
    closeArray(e)
    // On vide la liste des recetttes
    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild)
      }    
    if(nombreDeTags > 0) {    
      recetteByTag()  
    }else{     
        getAllRecipe(recipes)                 
    }    
  }

function recetteByTag () {
  let recetteFiltrees = []
  let array = []
    tagContainer.childNodes.forEach(tag => {   
      array.push(tag.innerText)
    })
    recipes.forEach(recette => {       
      let target = recette.ingredients
        if(array, target, array.every(tag => target.some(el => el.ingredient === tag))) {
           recetteFiltrees.push(recette)
         }      
    })
  
    recipes.forEach(recette => {
      console.log(recette)
        if(array.every(tag => recette.appliance.includes(tag))) {
          recetteFiltrees.push(recette)
        }
    })



    recipes.forEach(recette => {          
      let target = recette.ustensils   
        if(array.every(tag => target.includes(tag.toLowerCase()))) {
           recetteFiltrees.push(recette)
        }        
    })
    recetteFiltrees =[...new Set(recetteFiltrees)]
    recetteFiltrees.forEach(recette => {
      const filterList = new Recipe(recette)
            filterList.buildRecipe()
    }) 
}