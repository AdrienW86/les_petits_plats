export default class Listbox {
  constructor(ingredients, appareils, ustensiles,) {
    this.ingredients = ingredients
    this.ustensiles = ustensiles
    this.appareils = appareils
  }

  buildArray() {  
    this.ingredients.forEach(ingredient => {
      let list = document.querySelector(".list-li0")
      let li = document.createElement("li")
          li.setAttribute("class","option")
          li.innerHTML = ` <button class= "btn-one-choice" value="ingredient"> ${ingredient} </button>`
          list.appendChild(li)
    });
    this.appareils.forEach(appareil => { 
      let list = document.querySelector(".list-li1")
      let li = document.createElement("li")      
          li.setAttribute("class","option")
          li.innerHTML = ` <button class= "btn-one-choice" value="appareil"> ${appareil} </button>`
          list.appendChild(li)
    })
    this.ustensiles.forEach(ustensil => { 
      let list = document.querySelector(".list-li2")
      let li = document.createElement("li")
          li.setAttribute("class","option")
          li.innerHTML = ` <button class= "btn-one-choice" value="ustensil"> ${ustensil} </button>`
          list.appendChild(li)    
    })
  }
}  
