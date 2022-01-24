import Listbox from "./class-listbox.js"
import { uniqueIngredient, uniqueAppareil, uniqueUstensil } from "./datas.js"
import { buildArray, openArray, closeArray } from "./functions.js"
import { buildListRecipe, searchArray, searchBar,  createFilterTag } from "./search.js"

searchBar()
buildListRecipe()
  
// Création des listbox 
const build = new Listbox(uniqueIngredient, uniqueUstensil, uniqueAppareil)
      build.buildListbox()

      const openListboxIngredients = document.querySelectorAll(".select-btn0")
      openListboxIngredients.forEach(btn => btn.addEventListener("click", openArray))
     
      const openListboxAppareils = document.querySelectorAll(".select-btn1")
      openListboxAppareils.forEach(btn => btn.addEventListener("click", openArray))

      const openListboxUstensils = document.querySelectorAll(".select-btn2")
      openListboxUstensils.forEach(btn => btn.addEventListener("click", openArray))

// Création des listes de la listbox
buildArray()
searchArray()

// Boutons
document.querySelectorAll(".btn-close").forEach(btn => btn.addEventListener("click", closeArray))
//document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", createTag))
// document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", search))
document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", createFilterTag))