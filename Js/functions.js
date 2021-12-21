import {uniqueIngredient, uniqueAppareil, uniqueUstensil} from "./datas.js" 

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
           div.innerHTML = `<p> ${e.target.innerHTML} </p> <button class="btn-close-tag"> </button>`
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
          console.log(e.target)
          e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.value = ""
          document.querySelectorAll(".btn-close-tag").forEach(btn => btn.addEventListener("click", deleteTag))
  }
  // Suppression d'un tag 
  export function deleteTag(e) {
    e.target.parentElement.remove()
  }