import {uniqueIngredient, uniqueAppareil, uniqueUstensil} from "./datas.js" 
import { TagSelected } from "./search.js"
import { buildListRecipe, filterAppliances, filterIngredients, filterUstensils } from "./search.js"

  // Création des listes
  export function buildArray() { 
    uniqueIngredient.forEach(ingredient => { 
      let list = document.querySelector(".list-li0")
      let li = document.createElement("li")
          li.setAttribute("class","option")
          li.innerHTML = ` <button class= "btn-one-choice" value="ingredient"> ${ingredient} </button>`
          list.appendChild(li)
    })
    uniqueAppareil.forEach(appareil => { 
      let list = document.querySelector(".list-li1")
      let li = document.createElement("li")
          li.setAttribute("class","option")
          li.innerHTML = ` <button class= "btn-one-choice" value="appareil"> ${appareil} </button>`
          list.appendChild(li)
    })
    uniqueUstensil.forEach(ustensil => { 
      let list = document.querySelector(".list-li2")
      let li = document.createElement("li")
          li.setAttribute("class","option")
          li.innerHTML = ` <button class= "btn-one-choice" value="ustensil"> ${ustensil} </button>`
          list.appendChild(li)
    })
  }
  // Création des listes filtrées 
  export function buildCustomArray () {
    let list = document.querySelector(".list-li0")
    let list1 = document.querySelector(".list-li1")
    let list2 = document.querySelector(".list-li2")
    // On efface les anciens tableaux
      while (list.firstChild) {
        list.removeChild(list.lastChild)
      }
      while(list1.firstChild){
        list1.removeChild(list1.lastChild)
      }
      while(list2.firstChild) {
        list2.removeChild(list2.lastChild)
      }
    filterIngredients.forEach(ingredient => { 
      let list = document.querySelector(".list-li0")
      let li = document.createElement("li")
          li.setAttribute("class","option")
          li.innerHTML = ` <button class= "btn-one-choice" value="ingredient"> ${ingredient} </button>`
          list.appendChild(li)
    })
    filterAppliances.forEach(appareil => { 
      let list = document.querySelector(".list-li1")
      let li = document.createElement("li")
          li.setAttribute("class","option")
          li.innerHTML = ` <button class= "btn-one-choice" value="appareil"> ${appareil} </button>`
          list.appendChild(li)
    })
    filterUstensils.forEach(ustensil => { 
      let list = document.querySelector(".list-li2")
      let li = document.createElement("li")
          li.setAttribute("class","option")
          li.innerHTML = ` <button class= "btn-one-choice" value="ustensil"> ${ustensil} </button>`
          list.appendChild(li)
    })
  }
  // Ouverture de la listbox
  export function openArray(e) {  
    let listboxs = document.querySelectorAll(".listbox")
    let listboxopens = document.querySelectorAll(".listboxopen")
      listboxs.forEach(listbox => listbox.style.display = "flex")
      listboxopens.forEach(listboxopen => listboxopen.style.display = "none")
        e.target.closest(".listbox").style.display = "none"
        e.target.closest(".listbox").nextSibling.style.display = "flex"
  }
  // Fermeture de la listbox  
  export function closeArray(e) {
    let list = document.querySelectorAll(".listbox")
    let array = document.querySelectorAll(".listboxopen")
    array.forEach(tab => tab.style.display = "none")
    list.forEach(listbox => listbox.style.display = "flex")
  }
  // Création d'un tag
  export function createTag(e) {
    let tagContainer = document.querySelector(".tag-container")
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
          closeArray(e)
          document.querySelectorAll(".btn-close-tag").forEach(btn => btn.addEventListener("click", deleteTag))
  }
  // Suppression d'un tag 
  export function deleteTag(e) {
    e.target.parentElement.remove()
    console.log(e)

    let mainContainer = document.getElementById("container")
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.lastChild)
    }
   
    console.log(TagSelected)
    
    let container = document.querySelector(".tag-container").childNodes.length
       console.log("il vous reste " + container)
    if(container == 0) {
      buildListRecipe()
    }
  }