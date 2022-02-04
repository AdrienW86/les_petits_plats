// Barre de recherche globale
export function searchBar() {                      
  document.querySelector(".search").addEventListener("keyup", function(e) {
    let recherche = this.value.toLowerCase()
    let recettes = document.querySelectorAll(".fiche_recette")
    if(recherche.length > 2) {
      Array.prototype.forEach.call(recettes, function(recette) {
        if(recette.textContent.toLowerCase().indexOf(recherche) > -1) {
          recette.style.display = "block"
        }else {
          recette.style.display = "none"
        }
      })
    }else{
      Array.prototype.forEach.call(recettes, function(recette) {       
        recette.style.display = "block"   
      })
    }
  })
}
// Barre de recherche des tableaux
export function searchArray() {
    document.querySelectorAll(".find").forEach(input => input.addEventListener("keyup", function(e){
        let recherche = this.value.toLowerCase()
        let elements = document.querySelectorAll(".option")
            Array.prototype.forEach.call(elements, function(element) {
                if(element.textContent.toLowerCase().indexOf(recherche) > -1) {
                    element.style.display = "flex"
                }else {
                   element.style.display = "none"
                }
            })
    }))
}