export default class Recipe {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.servings = data.servings
        this.ingredients = data.ingredients
        this.time = data.time
        this.description = data.description
        this.appliance = data.appliance
        this.ustensils = data.ustensils
    }

    buildRecipe() {
        const main = document.getElementById("container")
        const card = document.createElement("section")
        const headercard = document.createElement("div")
        const bodyCard = document.createElement("div")
        const title = document.createElement("div")
        const cardContent = document.createElement("section")
        const divUl = document.createElement("div")
        const divDescription = document.createElement("div")
        
        
        const ul = document.createElement("ul")
        const description = document.createElement("div")
        
        main.appendChild(card)
        card.appendChild(headercard)       
        card.appendChild(bodyCard)
        bodyCard.appendChild(title)
        bodyCard.appendChild(cardContent)
        cardContent.appendChild(divUl)
        cardContent.appendChild(divDescription)
        divUl.appendChild(ul)
        divDescription.appendChild(description)
       

        card.setAttribute("class","fiche_recette")
        headercard.setAttribute("class", "header_recette")
        bodyCard.setAttribute("class", "body_recette")
        description.setAttribute("class", "bloc-recette" )
        title.setAttribute("class", "box-title")
        divUl.setAttribute("class", "ul-container")
        divDescription.setAttribute("class", "description-container")
        ul.setAttribute("class", "liste_ingredients")


      //  headercard.innerHTML = // this.picture 
        title.innerHTML = `<h2 class="title"> ${this.name} </h2> 
                            <p class= "time"> ${this.time} min </p>`
        
        const items = this.ingredients
        items.forEach(item => {
            console.table(item.ingredient)
            const li = document.createElement("li")
            ul.appendChild(li)
            if(item.quantity && item.unit) {
                li.innerHTML = item.ingredient + ": " + item.quantity + " " + item.unit                      
            }else if(item.quantity && ! item.unit){
                li.innerHTML = item.ingredient + ": " + item.quantity 
            }else if(!item.quantity && item.unit) {
                li.innerHTML = item.ingredient + item.unit 
            }else{
                li.innerHTML = item.ingredient 
            }
        }) 
        description.innerHTML = this.description     
    }
}