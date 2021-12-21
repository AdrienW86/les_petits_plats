import Recipe from "./class-recipes.js"
import Listbox from "./class-listbox.js"
import { recipes } from "../recipes.js"
import { uniqueIngredient, uniqueAppareil, uniqueUstensil } from "./datas.js"
import { buildArray, openArray, closeArray, createTag } from "./functions.js"
import { search, searchArray, searchBar } from "./search.js"

  searchBar()

  // Création de la liste de recette
  recipes.forEach(recette => {
    const listOfRecipes = new Recipe(recette)
    listOfRecipes.buildRecipe()
  })

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
 document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", createTag))


 document.querySelectorAll(".btn-one-choice").forEach(btn => btn.addEventListener("click", search))