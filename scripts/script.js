let doc_title = document.title
let menu = document.querySelectorAll("nav div a")

console.log(menu[1])

switch (doc_title) {
    case "ACCUEIL - Robbie Lens":
        menu[0].style.fontWeight = "bold"
        break

    case "À PROPOS - Robbie Lens":
        menu[1].style.fontWeight = "bold"
        break
    
    case "PORTFOLIO - Robbie Lens":
        menu[2].style.fontWeight = "bold"
        break

    default:
        menu[3].style.fontWeight = "bold"
}
