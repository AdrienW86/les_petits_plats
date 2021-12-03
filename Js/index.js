import {recipes} from "../recipes.js"
import Recipe from "./class-recipes.js"
import Listbox from "./class-listbox.js"

// Barre de recherche

  document.querySelector(".search").addEventListener("keyup", function(e) {
    let recherche = this.value.toLowerCase()
    let documents = document.querySelectorAll(".fiche_recette")
    Array.prototype.forEach.call(documents, function(document) {
      if(document.innerHTML.toLowerCase().indexOf(recherche) > -1) {
        document.style.display = "block"
      }else {
        document.style.display = "none"
      }
    })
  })

// Initialisation des différents tableaux

const recettes = []
const listIngredients = []

const ustensils = []
const listUstensils = []

const appareils = []
const listAppareils = []

// Création de la liste des recettes

recipes.forEach(recette => {
    const listOfRecipes = new Recipe(recette)
    listOfRecipes.buildRecipe()
    recettes.push(recette.ingredients)
    ustensils.push(recette.ustensils)
    appareils.push(recette.appliance)
})

// On filtre les ingrédients

recettes.forEach(element => {
  element.forEach(produit => {

    listIngredients.push(produit.ingredient.charAt(0).toUpperCase() + produit.ingredient.substring(1).toLowerCase())  
  })
})
let uniqueIngredient = [...new Set( listIngredients.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]

// On filtre les ustensiles 

ustensils.forEach(ustensil => {
   ustensil.forEach(element => {
      listUstensils.push(element)     
   })
 })

let uniqueUstensil = [...new Set( listUstensils.sort())]
//console.table(uniqueUstensil)

// On filtre les appareils 

appareils.forEach(appareil => {     
    listAppareils.push(appareil)   
})

let uniqueAppareil = [...new Set( listAppareils.sort())]
//console.table(uniqueAppareil)

// Création des listbox 

const listboxIngredients = new Listbox(recipes)
listboxIngredients.ingredientsFilter()

const listboxAppareils = new Listbox(recipes)
listboxAppareils.appareilsFilter()

const listboxUstensils = new Listbox(recipes)
listboxUstensils.ustensilsFilter()

/* Création des options */

let ingredientsTarget = document.querySelectorAll(".select-btn")
let listboxArray = document.querySelector(".listbox-array")
let listboxForIngredients = document.querySelector(".listbox-ingredients")

let closeBtn = document.querySelectorAll(".btn-close")
closeBtn.forEach(btn => btn.addEventListener("click", closeArray))




ingredientsTarget.forEach(btn =>btn.addEventListener("click", displayIngredients))

let ulbox = document.querySelector(".ul-box")


function displayIngredients() {
  let ul = document.createElement("ul") 
  ul.setAttribute("class","list-li") 
  ulbox.appendChild(ul)  
    uniqueIngredient.forEach(ingredient => {                         
      let li = document.createElement("li")
      li.setAttribute("class", "option")
      ul.appendChild(li)
      let option = document.createElement("button")
      option.setAttribute("class", "btn-one-choice")
      li.appendChild(option)
      option.innerHTML = ingredient
      listboxForIngredients.style.display = "none"
      listboxArray.style.display = "block"

      let optionSelected = document.querySelectorAll(".btn-one-choice")
      optionSelected.forEach(option => option.addEventListener("click", searchOption))
    })
  }
 
  

  function closeArray() {
    listboxArray.style.display = "none"
    listboxForIngredients.style.display = "flex"
    let remove = document.querySelector(".list-li")
    remove.remove()
  }





function searchOption (e) {
  let optionContent = e.target.innerHTML
  let domFix = document.querySelector(".tag-container")
  domFix.style.display = "flex"
  let tag = document.createElement("div")
  domFix.appendChild(tag)
  tag.setAttribute("class", "tag-ingredient")
  tag.innerHTML = optionContent
  let close = document.createElement("button")
  close.setAttribute("class", "btn-tag")
  tag.appendChild(close)
  close.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="white"/>
                    </svg>`
}





let appareilTarget = document.querySelector(".listbox-appareils")
    uniqueAppareil.forEach(appareil => {
      let option = document.createElement("option")
      appareilTarget.appendChild(option)
      option.innerHTML = appareil
})

let ustensilsTarget = document.querySelector(".listbox-ustensils")
    uniqueUstensil.forEach(ustensil => {
      let option = document.createElement("option")
      ustensilsTarget.appendChild(option)
      option.innerHTML = ustensil
})
/*
document.querySelector(".listbox-ingredients").addEventListener("click", function(e) {
  let select = this.value.toLowerCase()
  let params = document.querySelectorAll(".fiche_recette")
  Array.prototype.forEach.call(params, function(param){
    if(param.innerHTML.toLowerCase().indexOf(select) > -1) {
      param.style.display = "block"
    }else{
      param.style.display = "none"
    }
  })
})




document.querySelector(".listbox-appareils").addEventListener("click", function(e) {
  let select = this.value.toLowerCase()
  let params = document.querySelectorAll(".fiche_recette")
  Array.prototype.forEach.call(params, function(param){
    if(param.innerHTML.toLowerCase().indexOf(select) > -1) {
      param.style.display = "block"
    }else{
      param.style.display = "none"
    }
  })
})

document.querySelector(".listbox-ustensils").addEventListener("click", function(e) {
  let option = document.querySelector(".select-ustensils")
  console.log(option.innerHTML)
  let select = this.value.toLowerCase()
  let params = document.querySelectorAll(".fiche_recette")
  console.log(params)
  Array.prototype.forEach.call(params, function(param){
    if( option.innerHTML === "Ustensiles") {
      console.log(this.innerHTML)
    }
    else if(param.innerHTML.toLowerCase().indexOf(select) > -1) {
      param.style.display = "block"
      console.log(this.innerHTML)
    }else{
      param.style.display = "none"
    }
  })
})

*/