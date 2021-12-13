export default class Listbox {
    constructor(uniqueIngredient, uniqueAppareil, uniqueUstensil) {
    this.ingredients = uniqueIngredient
    this.ustensiles = uniqueAppareil
    this.appareils = uniqueUstensil
    }

    buildListbox() {
      for(let i = 0; i < 3; i++) {
        let classname = "listbox" + i
        let title = "title" + i
        let find = "find" + i
        let array = "array" + i
        let selectBtn = "select-btn" + i
        let close = "btn-close" 
        let ulbox = "ul-box" + i
        let list = "list-li" + i
        let section = document.querySelector(".listbox-container")
        let listbox = document.createElement("div")  
            listbox.classList.add("inactif")        
            listbox.classList.add(classname)
            section.appendChild(listbox)
            listbox.innerHTML = `<div class="${title}"></div>                                
                                  <button class="${selectBtn}"></button> `
        let table = document.createElement("section")
            section.appendChild(table)
            table.classList.add("active")
            table.classList.add(array)
            table.innerHTML = `<section class="listbox-title">
                                  <input class="${find}" type="search"/>
                                  <button class="${close}"></button>
                                </section>
                                <section class="${ulbox}">
                                   <ul class="${list}"></ul>
                                </section>`                             
      }
      document.querySelector(".title0").innerHTML = "Ingrédients"
      document.querySelector(".find0").setAttribute("placeholder", " Rechercher un ingrédient")
      document.querySelector(".title1").innerHTML = "Appareils"
      document.querySelector(".find1").setAttribute("placeholder", " Rechercher un appareil")
      document.querySelector(".title2").innerHTML = "Ustensiles"
      document.querySelector(".find2").setAttribute("placeholder", " Rechercher un ustensile")     
    }
}  