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
        let close = "btn-close" + i
        let ulbox = "ul-box" + i
        let section = document.querySelector(".listbox-container")
        let listbox = document.createElement("div")          
            listbox.classList.add(classname)
            section.appendChild(listbox)
            listbox.innerHTML = `<div class="${title}"> </div>                                
                                  <button class="${selectBtn}">                             
                                    <svg class="arrow-down" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.12 0.453369L8 6.56004L1.88 0.453369L0 2.33337L8 10.3334L16 2.33337L14.12 0.453369Z" fill="white"/>
                                    </svg>
                                  </button>                                                            
                                </div>`
        let table = document.createElement("section")
            section.appendChild(table)
            table.classList.add(array)
            table.innerHTML = `<input class="${find}" type="search"/>
                               <button class="${close}"></button>
                                <section class="${ulbox}"> </section>`
      }
    }
    ingredientsFilter() {
      let title = document.querySelector(".title0")
          title.innerHTML = "Ingrédients"
      let find = document.querySelector(".find0")
          find.setAttribute("placeholder", " Rechercher un ingrédient")
    }
    appareilsFilter() {   
    let title = document.querySelector(".title1")
        title.innerHTML = "Appareils"
    let find = document.querySelector(".find1")
        find.setAttribute("placeholder", " Rechercher un appareil")
    }
    ustensilsFilter() {
    let title = document.querySelector(".title2")
        title.innerHTML = "Ustensiles"
    let find = document.querySelector(".find2")
        find.setAttribute("placeholder", " Rechercher un ustensile")
    }   
}