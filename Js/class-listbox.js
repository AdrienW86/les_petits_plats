export default class Listbox {
    constructor(data) {

    this.ingredients = data.ingredients
    this.ustensiles = data.ustensils
    this.appareil = data.appliance
    }

    ingredientsFilter() {
      let section = document.querySelector(".listbox-container")
      let listbox = document.createElement("select")
      listbox.setAttribute("class", "listbox-ingredients")
      section.appendChild(listbox)
      listbox.innerHTML = `<option class ="select-ingredients"> Ingrédients </option> `  
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