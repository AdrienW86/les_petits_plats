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
    let target = e.target 
      if(target.getAttribute("class") == "select-btn0") {                 
        document.querySelector(".array0").style.display ="flex"
        document.querySelector(".listbox0").style.display = "none"
      }else if(target.getAttribute("class") == "select-btn1") {                             
        document.querySelector(".array1").style.display ="flex"
        document.querySelector(".listbox1").style.display = "none"
      }else if(target.getAttribute("class") == "select-btn2") {                             
        document.querySelector(".array2").style.display ="flex"
        document.querySelector(".listbox2").style.display = "none"
      }  
  }
  // Fermeture de la listbox  
  export function closeArray(e) {
    e.target.closest(".active").style.display ="none"
    e.target.closest(".active").previousSibling.style.display ="flex"
  }
  // Création d'un tag
  export function createTag(e) {
    let tagContainer = document.querySelector(".tag-container")
        tagContainer.style.display = "flex"
       let div = document.createElement("div")
           div.innerHTML = `<p> ${e.target.innerHTML} </p> <button class="btn-close-tag" </button>`
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
    console.log(e.target.closest(".active"))
    let tag = e.target.parentElement
    console.log(tag)
    tag.remove()
  }
  export function filterArray(uniqueIngredient, uniqueAppareil, uniqueUstensil) {
    if(document.querySelector(".tag-ingredient")) {
      console.log(uniqueIngredient)
    }
  } 