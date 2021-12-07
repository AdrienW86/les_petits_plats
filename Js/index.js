import {recipes} from "../recipes.js"
import Recipe from "./class-recipes.js"
import Listbox from "./class-listbox.js"

const build = new Listbox
      build.buildListbox()

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
console.table(uniqueUstensil)

// On filtre les appareils 

appareils.forEach(appareil => {     
    listAppareils.push(appareil)   
})

let uniqueAppareil = [...new Set( listAppareils.sort())]
//console.table(uniqueAppareil)

const data = []
data.push(uniqueIngredient, uniqueAppareil, uniqueUstensil)
console.log(data)

// Création des listbox 

const listboxIngredients = new Listbox(uniqueIngredient, uniqueAppareil, uniqueUstensil)
listboxIngredients.ingredientsFilter()

const listboxAppareils = new Listbox(uniqueIngredient, uniqueAppareil, uniqueUstensil)
listboxAppareils.appareilsFilter()

const listboxUstensils = new Listbox(uniqueIngredient, uniqueAppareil, uniqueUstensil)
listboxUstensils.ustensilsFilter()

/* Création des options */

/* Ingrédients*/

let ingredientsTarget = document.querySelectorAll(".select-btn0")
let listboxArray = document.querySelector(".array0")
let listboxForIngredients = document.querySelector(".listbox0")
let closeBtn = document.querySelectorAll(".btn-close0")
closeBtn.forEach(btn => btn.addEventListener("click", closeArray))

ingredientsTarget.forEach(btn =>btn.addEventListener("click", displayIngredients))
console.log(ingredientsTarget)

// Ouverture de la listbox

function displayIngredients(e) {
  console.log(e.target.parentNode.parentNode)
  let ulbox = document.querySelector(".ul-box0")
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

/*Appareils*/

let appareilsTarget = document.querySelectorAll(".select-btn1")
let listboxArray2 = document.querySelector(".array1")
let listboxForAppareils = document.querySelector(".listbox1")
let closeBtn2 = document.querySelectorAll(".btn-close1")

closeBtn2.forEach(btn => btn.addEventListener("click", closeArray))
appareilsTarget.forEach(btn => btn.addEventListener("click", displayAppareils))

function displayAppareils(e) {
  console.log(e.target.parentNode.parentNode)
  let ulbox2 = document.querySelector(".ul-box1")
  console.log(ulbox2)
  let ul = document.createElement("ul")
  ul.setAttribute("class", "list-li1")
  ulbox2.appendChild(ul)
    uniqueAppareil.forEach(appareil => {
      let li = document.createElement("li")
      li.setAttribute("class", "option2")
      ul.appendChild(li)
      let option = document.createElement("button")
      option.setAttribute("class", "btn-one-choice2")
      li.appendChild(option)
      option.innerHTML = appareil
      listboxForAppareils.style.display = "none"
      listboxArray2.style.display = "block"
      let optionSelected = document.querySelectorAll(".btn-one-choice2")
      optionSelected.forEach(option => option.addEventListener("click", searchOption))
    })
}

// Fermeture de la listbox  

  function closeArray(e) {
  listboxArray.style.display = "none"
  console.log(e.target)
  listboxForIngredients.style.display = "flex"
  listboxArray2.style.display = "none"
  console.log(e.target)
  listboxForAppareils.style.display = "flex"
    let remove = document.querySelector(".list-li")
        if(remove){
          remove.remove()
        }
  }

// Création d'un tag

function searchOption (e) {
  console.log(e.target.innerHTML)
  console.log(uniqueAppareil)
  let optionContent = e.target.innerHTML
  let tagContainer = document.querySelector(".tag-container")
      tagContainer.style.display = "flex"
  let tag = document.createElement("div")
      tagContainer.appendChild(tag)
      tag.setAttribute("class", "tag")
      for(let i = 0 ; i < uniqueIngredient.length ; i++) {
        let test = uniqueIngredient[i]
          if(test.includes(e.target.innerHTML)) {
            tag.classList.add("tag-ingredient")
          }
      }
      for(let i = 0; i < uniqueAppareil.length ; i++) {
        let test = uniqueAppareil[i]
          if(test.includes(e.target.innerHTML)) {
            tag.classList.add("tag-appareil")
          }
      }
      for(let i = 0; i < uniqueUstensil.length ; i++) {
        let test = uniqueUstensil[i]
          if(test.includes(e.target.innerHTML)) {
            tag.classList.add("tag-appareil")
          }
      }
      tag.innerHTML = optionContent
  let btn = document.createElement("button")
      btn.setAttribute("class","delete-tag")
      tag.appendChild(btn)                                             
  let closeBtnTag = document.querySelectorAll(".delete-tag")
      closeBtnTag.forEach(tag => tag.addEventListener("click", closeTag))   
      closeArray(e)              
}

// Suppression d'un tag

function closeTag(e) {
  let tag = e.target.parentElement
  console.log(tag)
  tag.remove()
}