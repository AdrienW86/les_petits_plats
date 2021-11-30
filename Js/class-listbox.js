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
 //  listbox.innerHTML =   `<option> Ingrédients</option>
                          //  <option> ${this.ingredients}</option>`

    }

    appareilsFilter() {
        let section = document.querySelector(".listbox-container")
      let listbox = document.createElement("select")
      listbox.setAttribute("class", "listbox-appareils")
      section.appendChild(listbox)
    }

    ustensilsFilter() {
      let section = document.querySelector(".listbox-container")
      let listbox = document.createElement("select")
      listbox.setAttribute("class", "listbox-ustensils")
      section.appendChild(listbox)
    }
}