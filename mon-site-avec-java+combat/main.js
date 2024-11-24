//Java pour Darkmode
//Déclaration de toutes la varialbles
let fond = document.querySelector("#fond")//Variable attribuée à <p> Mode Sombre </p> pour passer le site en sombre
let body = document.querySelector("body")//Variable attribuée au contenu de la page
let nav = document.querySelector("nav")//Variable attribuée à la navigation
let footer = document.querySelector("footer")//Variable attribuée au footer
let fond_photo1 = document.querySelector("#fond_photo1")//Variables attribuées aux différents bulles derrières les photos
let fond_photo2 = document.querySelector("#fond_photo2")
let fond_photo3 = document.querySelector("#fond_photo3")

fond.addEventListener("click", function(){//Fonction pour rendre <p> Mode sombre </p> comme un bouton cliquable
    console.log("element clique")
    body.classList.toggle('black')// Classes permettant de modifier les propriétés CSS lorsqu'on clique sur "Mode Sombre"
    nav.classList.toggle('grey')
    footer.classList.toggle('grey')
    fond_photo1.classList.toggle('grey')
    fond_photo2.classList.toggle('grey')
    fond_photo3.classList.toggle('grey')
})






