import { requestingHotels } from "./src/hoteles.js"
//* Llamando elementos existentes
const body = document.querySelector("body")

//* Creando elementos con DOM
const header = document.createElement("header")
const title = document.createElement("h1")
const filterContainer = document.createElement("div")
const messageFound = document.createElement("div")
const messageHover = document.createElement("section")

//* Ubicando elementos con DOM
body.appendChild(header)
header.appendChild(title)
header.appendChild(filterContainer)
header.appendChild(messageFound)
body.appendChild(messageHover)

//* Personalizando elementos con DOM
header.className = "header"
title.className = "title"
title.innerText = "Book It!"
filterContainer.className = "filter__container"
messageFound.className = "message__found"

