export default class Listbox {
    constructor(data) {

    this.ingredients = data.ingredients
    this.ustensiles = data.ustensils
    this.appareil = data.appliance
    }

    ingredientsFilter() {
      let section = document.querySelector(".listbox-container")
      section.innerHTML = `<div class ="listbox-ingredients"> 
                                <div class="listbox-title"> Ingrédients </div>
                                <div class="btn-container">
                                  <button class="select-btn">                             
                                    <svg class="arrow-down" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.12 0.453369L8 6.56004L1.88 0.453369L0 2.33337L8 10.3334L16 2.33337L14.12 0.453369Z" fill="white"/>
                                    </svg>
                                  </button>
                                </div>
                           </div>
                           <div class ="listbox-array">
                           <input class="find-ingredient" type="search" placeholder="Rechercher un ingrédient"/>
                           <button class="btn-close">  
                                <svg class="arrow-up" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.88 10.5466L8 4.43996L14.12 10.5466L16 8.66663L8 0.66663L1.64355e-07 8.66663L1.88 10.5466Z" fill="white"/>
                                </svg> 
                              </button>
                              <section class ="ul-box"></section>
                          </div>`
    }

    appareilsFilter() {
      let section = document.querySelector(".listbox-container")
      let listbox = document.createElement("select")
      listbox.setAttribute("class", "listbox-appareils")
      section.appendChild(listbox)
      listbox.innerHTML =   `<option class="select-appareils"> Appareil</option>`
    }

    ustensilsFilter() {
      let section = document.querySelector(".listbox-container")
      let listbox = document.createElement("select")
      listbox.setAttribute("class", "listbox-ustensils")
      section.appendChild(listbox)
      listbox.innerHTML =   `<option class="select-ustensils"> Ustensiles</option>`
    }
}