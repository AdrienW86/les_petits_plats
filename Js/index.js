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
      if(document.textContent.toLowerCase().indexOf(recherche) > -1) {
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
      listUstensils.push(element.charAt(0).toUpperCase() + element.substring(1).toLowerCase())     
   })
 })
let uniqueUstensil = [...new Set( listUstensils.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]
console.table(uniqueUstensil)

// On filtre les appareils 

appareils.forEach(appareil => {     
    listAppareils.push(appareil.charAt(0).toUpperCase() + appareil.substring(1).toLowerCase())   
})

let uniqueAppareil = [...new Set( listAppareils.sort((a,b) => a.localeCompare(b, 'fr',{sensitivity: 'base'})))]
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

ingredientsTarget.forEach(btn =>btn.addEventListener("click", display))
// Ouverture de la listbox

/*Appareils*/

let appareilsTarget = document.querySelectorAll(".select-btn1")
let listboxArray2 = document.querySelector(".array1")
let listboxForAppareils = document.querySelector(".listbox1")
let closeBtn2 = document.querySelectorAll(".btn-close1")

closeBtn2.forEach(btn => btn.addEventListener("click", closeArray))
appareilsTarget.forEach(btn => btn.addEventListener("click", display))

/*Ustensils*/

let ustensilsTarget = document.querySelectorAll(".select-btn2")
let listboxArray3 = document.querySelector(".array2")
let listboxForUstensils = document.querySelector(".listbox2")
let closeBtn3 = document.querySelectorAll(".btn-close2")

closeBtn3.forEach(btn => btn.addEventListener("click", closeArray))
ustensilsTarget.forEach(btn => btn.addEventListener("click", display))

/*Fonction pour afficher les différentes listes*/

function display(e) {
 let target = e.target.parentNode
 let ul = document.createElement("ul")
  if(target.getAttribute("class") == "select-btn0") {
    let ulbox = document.querySelector(".ul-box0")
        ulbox.appendChild(ul)
        ul.setAttribute("class", "list-li")
          uniqueIngredient.forEach(ingredient => {                         
            let li = document.createElement("li")
            li.setAttribute("class", "option")
            ul.appendChild(li)
            let option = document.createElement("button")
            option.setAttribute("class", "btn-one-choice")
            li.appendChild(option)
            option.innerHTML = ingredient      
          })
      listboxForIngredients.style.display = "none"
      listboxArray.style.display = "flex" 
  }else if(target.getAttribute("class") == "select-btn1") {
    let ulbox2 = document.querySelector(".ul-box1")
        ulbox2.appendChild(ul)
        ul.setAttribute("class", "list-li2")
          uniqueAppareil.forEach(appareil => {
            let li = document.createElement("li")          
            li.setAttribute("class", "option")
            ul.appendChild(li)    
            let option = document.createElement("button")
            option.setAttribute("class", "btn-one-choice")             
            li.appendChild(option)
            option.innerHTML = appareil    
          })
      listboxForAppareils.style.display = "none"
      listboxArray2.style.display = "block" 
  }else if(target.getAttribute("class") == "select-btn2") {
          uniqueUstensil.forEach(ustensil => {
            let ulbox3 = document.querySelector(".ul-box2")   
                ulbox3.appendChild(ul)
                ul.setAttribute("class", "list-li3")
            let li = document.createElement("li")
            li.setAttribute("class", "option")
            ul.appendChild(li)
            let option = document.createElement("button")
            option.setAttribute("class", "btn-one-choice")
            li.appendChild(option)
            option.innerHTML = ustensil  
          })
      listboxForUstensils.style.display = "none"
      listboxArray3.style.display = "block"                    
  } 
  let optionSelected = document.querySelectorAll(".btn-one-choice")
      optionSelected.forEach(option => option.addEventListener("click", searchOption))
}

// Fermeture de la listbox  

  function closeArray(e) {
      let remove = document.querySelector(".list-li")
      let remove2 = document.querySelector(".list-li2")
      let remove3 = document.querySelector(".list-li3")
        if(remove){
          listboxArray.style.display = "none"
          listboxForIngredients.style.display = "flex"
          remove.remove()
        }else if (remove2) {
          listboxArray2.style.display = "none"
          listboxForAppareils.style.display = "flex"
          remove2.remove()
        }else if(remove3){
          listboxArray3.style.display ="none"
          listboxForUstensils.style.display ="flex"
          remove3.remove()
        }
  }
// Création d'un tag

function searchOption (e) {
  let ArrayTextContent = []
  let listFicheRecette = document.querySelectorAll(".fiche_recette")
  let optionContent = e.target.innerHTML
  let tagContainer = document.querySelector(".tag-container")
      tagContainer.style.display = "flex"
  let tag = document.createElement("div")
      tagContainer.appendChild(tag)
      tag.setAttribute("class", "tag")
      for(let i = 0 ; i < uniqueIngredient.length ; i++) {
        let test = uniqueIngredient[i]
        //console.table(test)
       // console.log(e.target.innerHTML)
          if(test.includes(e.target.innerHTML)) {
            tag.classList.add("tag-ingredient")
            console.log(e.target.innerHTML)
            console.log(test.includes(e.target.innerHTML))
            console.log(listFicheRecette)
            listFicheRecette.forEach(recette => {

              console.log(recette)
              recette.style.display = "none"
              if(recette.textContent.toLowerCase().includes(e.target.innerHTML.toLowerCase())) {
                console.log(recette.getAttribute("data-appliance"))
                recette.style.display = "block"
              }
            })
          }
      }
      for(let i = 0; i < uniqueAppareil.length ; i++) {
        let test = uniqueAppareil[i]
          if(test.includes(e.target.innerHTML)) {
            tag.classList.add("tag-appareil")
            console.log(e.target.innerHTML)
            console.log(test)
            listFicheRecette.forEach(recette => {
              recette.style.display = "none"
              if(recette.getAttribute("data-appliance").toLowerCase().includes(e.target.innerHTML.toLowerCase())) {
    
                recette.style.display = "block"
              }
            })
          }
      }
      for(let i = 0; i < uniqueUstensil.length ; i++) {
        let test = uniqueUstensil[i]
        console.log(uniqueUstensil[i])
          if(test.includes(e.target.innerHTML)) {
            tag.classList.add("tag-ustensil")
            listFicheRecette.forEach(recette => {
              recette.style.display = "none"
              if(recette.getAttribute("data-ustensils").toLowerCase().includes(e.target.innerHTML.toLowerCase())) {
                console.log(recette)
                recette.style.display = "block"
              }
            })
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