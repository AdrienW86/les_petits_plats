import {uniqueIngredient, uniqueAppareil, uniqueUstensil} from "./datas.js" 
import {recipes} from "../recipes.js"
import {buildArray} from "./functions.js"

let arrayFilter = []
let ingredientFilter = []
let appareilFilter = []
let ustensilFilter = []

export function search(e) {
    let tag = e.target.value
  /*  console.log(tag)
    console.table(uniqueIngredient)
    if(tag == "ingredient") {
        ingredientFilter.push(e.target.innerHTML)
    }else if(tag == "appareil") {
        appareilFilter.push(tag)
    }else if(tag == "ustensil") {
        ustensilFilter.push(tag)
    }*/
let fiches = document.querySelectorAll(".fiche_recette")
let target = e.target.innerText.toLowerCase().trimStart().trimEnd();
    fiches.forEach(fiche => {
      let valueIngredient = fiche.getAttribute("data-ingredient").toLowerCase()
      let valueAppareil = fiche.getAttribute("data-appliance").toLowerCase()
      let valueUstensil = fiche.getAttribute("data-ustensils").toLowerCase()
      let reg  = new RegExp("[,]+", "g");
      let tableau = valueIngredient.split(reg)//,valueAppareil.split(reg),valueUstensil.split(reg)]
     
    // for(let i = 0 ; i < tableau.length; i++) {
      console.log(e.target)
      console.log(tableau)
         console.log(target.trimStart())
         const tests = new Set(tableau)//[i])
         console.table(tests)
            
           if(tests.has(target)) {
             fiche.style.display = "flex"
           }else{
             fiche.style.display = "none"
           }
     // }
     
    }) 
}

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