export default class Listbox {
  constructor(uniqueIngredient, uniqueAppareil, uniqueUstensil) {
  this.ingredients = uniqueIngredient
  this.ustensiles = uniqueAppareil
  this.appareils = uniqueUstensil
  }

  buildListbox() {
    for(let i = 0; i < 3; i++) {
      let classname = "listbox" 
      let title = "title" + i
      let find = "find" + i 
      let selectBtn = "select-btn" + i
      let close = "btn-close" 
      let ulbox = "ul-box" + i
      let list = "list-li" + i
      let section = document.querySelector(".listbox-container")
      let listbox = document.createElement("div")        
          listbox.classList.add(classname)
          listbox.classList.add (classname + i)
          section.appendChild(listbox)
          listbox.innerHTML = `<div class="listbox-header">
                                    <div class="${title}"></div>                                
                                      <button class="${selectBtn}"></button>
                              </div> `
                               
    let listbox_open = document.createElement("div")
    listbox_open.classList.add(classname + "open") 
    section.appendChild(listbox_open)
    listbox_open.innerHTML = `<div class="array">  
                                <div class="${ulbox}">
                                  <input class="find ${find}" type="search"/>
                                  <button class="${close}"></button>                         
                                  <ul class="${list}"></ul>                                    
                                </div>
                              </div>`                     
    }
    document.querySelector(".title0").innerHTML = "Ingrédients"
    document.querySelector(".find0").setAttribute("placeholder", " Rechercher un ingrédient")
    document.querySelector(".title1").innerHTML = "Appareils"
    document.querySelector(".find1").setAttribute("placeholder", " Rechercher un appareil")
    document.querySelector(".title2").innerHTML = "Ustensiles"
    document.querySelector(".find2").setAttribute("placeholder", " Rechercher un ustensile")     
  }
}  