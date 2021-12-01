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
    listIngredients.push(produit.ingredient)  
  })
})
let uniqueIngredient = [...new Set( listIngredients)]
console.table(uniqueIngredient)

// On filtre les ustensiles 

ustensils.forEach(ustensil => {
   ustensil.forEach(element => {
      listUstensils.push(element)     
   })
 })

let uniqueUstensil = [...new Set( listUstensils)]
console.table(uniqueUstensil)

// On filtre les appareils 

appareils.forEach(appareil => {     
    listAppareils.push(appareil)   
})

let uniqueAppareil = [...new Set( listAppareils)]
console.table(uniqueAppareil)

// Création des listbox 

const listboxIngredients = new Listbox(recipes)
listboxIngredients.ingredientsFilter()

const listboxAppareils = new Listbox(recipes)
listboxAppareils.appareilsFilter()

const listboxUstensils = new Listbox(recipes)
listboxUstensils.ustensilsFilter()

/* Création des options */

let ingredientsTarget = document.querySelector(".listbox-ingredients")
    uniqueIngredient.forEach(ingredient => {
      let option = document.createElement("option")
      ingredientsTarget.appendChild(option)
      option.innerHTML = ingredient
})

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