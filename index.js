import { requestingHotels } from "./src/hoteles.js"

const body = document.body

// Create elements with DOM

const header = document.createElement("header")
const title = document.createElement("p")
const messageFound = document.createElement("div")
const messageHover = document.createElement("section")
const filterContainer = document.createElement("div")
const filterGrid = document.createElement("div")
const selectCountry = document.createElement("select")
const selectPrice = document.createElement("select")
const selectSize = document.createElement("select")
const buttonSearch = document.createElement("button")
const buttonClear = document.createElement("button")

// Create inputs Date
const inputDateIn = document.createElement("input")
filterGrid.appendChild(inputDateIn)
inputDateIn.setAttribute("class", "filter__icon filter__date__in")
inputDateIn.setAttribute("name", "date-from")
inputDateIn.setAttribute("type", "date")
inputDateIn.setAttribute("min", "2024-05-06")
inputDateIn.setAttribute("max", "")
inputDateIn.setAttribute("value", "")

const inputDateOut = document.createElement("input")
filterGrid.appendChild(inputDateOut)
inputDateOut.setAttribute("class", "filter__icon filter__date__out")
inputDateOut.setAttribute("type", "date")
inputDateOut.setAttribute("name", "date-to")
inputDateOut.setAttribute("min", "2024-05-06")
inputDateOut.setAttribute("value", "")

// Locate Elements
body.appendChild(header)
header.appendChild(title)
header.appendChild(messageFound)
header.appendChild(filterContainer)
body.appendChild(messageHover)
filterContainer.appendChild(filterGrid)
filterGrid.appendChild(selectCountry)
filterGrid.appendChild(selectPrice)
filterGrid.appendChild(selectSize)

// Create Message
const weFound = document.createElement("p")
messageFound.appendChild(weFound)
weFound.className = "subtitle"
weFound.innerText = "Find your next stay..."
const bestHotels = document.createElement("p")
messageFound.appendChild(bestHotels)
bestHotels.className = "all__hotels__text"
bestHotels.innerText = "Search best prices on hotels, homes and much more..."

// Create Options For Countries
const optionCountryAll = document.createElement("option")
selectCountry.appendChild(optionCountryAll)
optionCountryAll.innerText = "All Countries"
optionCountryAll.setAttribute("value", "All countries")

const optionCountryArg = document.createElement("option")
selectCountry.appendChild(optionCountryArg)
optionCountryArg.innerText = "🇦🇷 Argentina "
optionCountryArg.setAttribute("id", "country-selection")
optionCountryArg.setAttribute("value", "Argentina")

const optionCountryBr = document.createElement("option")
selectCountry.appendChild(optionCountryBr)
optionCountryBr.innerText = "🇧🇷 Brasil"
optionCountryArg.setAttribute("id", "country-selection")
optionCountryBr.setAttribute("value", "Brasil")

const optionCountryCh = document.createElement("option")
selectCountry.appendChild(optionCountryCh)
optionCountryCh.innerText = "🇨🇱 Chile"
optionCountryArg.setAttribute("id", "country-selection")
optionCountryCh.setAttribute("value", "Chile")

const optionCountryUr = document.createElement("option")
selectCountry.appendChild(optionCountryUr)
optionCountryUr.innerText = "🇺🇾 Uruguay"
optionCountryArg.setAttribute("id", "country-selection")
optionCountryUr.setAttribute("value", "Uruguay")

// Create buttons Search and Clear
buttonSearch.innerText = "Search"
filterGrid.appendChild(buttonSearch)
buttonClear.innerText = "Clear"
filterGrid.appendChild(buttonClear)

// Create Options for Select Price
const optionAllPrices = document.createElement("option")
selectPrice.appendChild(optionAllPrices)
optionAllPrices.setAttribute("value", "All Categories")
optionAllPrices.innerText = "All Categories"

const optionPrice$ = document.createElement("option")
selectPrice.appendChild(optionPrice$)
optionPrice$.setAttribute("value", "★")
optionPrice$.innerText = "One-star ★"

const optionPrice$$ = document.createElement("option")
selectPrice.appendChild(optionPrice$$)
optionPrice$$.setAttribute("value", "★★")
optionPrice$$.innerText = "Two-stars ★★"

const optionPrice$$$ = document.createElement("option")
selectPrice.appendChild(optionPrice$$$)
optionPrice$$$.setAttribute("value", "★★★")
optionPrice$$$.innerText = "Three-stars ★★★"

const optionPrice$$$$ = document.createElement("option")
selectPrice.appendChild(optionPrice$$$$)
optionPrice$$$$.setAttribute("value", "★★★★")
optionPrice$$$$.innerText = "Four-stars ★★★★"

// Create Options for Select Size
const optionAllSizes = document.createElement("option")
optionAllSizes.setAttribute("value", "All Sizes")
optionAllSizes.innerText = "All sizes"
selectSize.appendChild(optionAllSizes)

const optionSmall = document.createElement("option")
optionSmall.setAttribute("value", "Small")
optionSmall.innerText = "Small"
selectSize.appendChild(optionSmall)

const optionMedium = document.createElement("option")
optionMedium.setAttribute("value", "Medium")
optionMedium.innerText = "Medium"
selectSize.appendChild(optionMedium)

const optionLarge = document.createElement("option")
optionLarge.setAttribute("value", "Large")
optionLarge.innerText = "Large"
selectSize.appendChild(optionLarge)

// Customize elementss with DOM
header.className = "header"
title.innerText = "Book It!"
title.className = "title"
filterContainer.className = "filter__container"
messageFound.className = "message__found"
filterGrid.className = "filter__grid filter__grid__color"
selectCountry.setAttribute("class", "filter__icon filter__country")

selectPrice.className = "filter__icon filter__stars"
selectSize.className = "filter__icon filter__size"
buttonClear.className = "buttons__filter"
buttonSearch.className = "buttons__filter"

const containerHotels = document.createElement("section")
containerHotels.className = "container__hotels"
body.appendChild(containerHotels)

let hotelData = []

async function fetchingHotels() {
    const response = await requestingHotels()
    const data = await response.json()
    return data
}
function creatingHotels(hotelData) {
    containerHotels.innerHTML = ``
    hotelData.forEach((hotel) => {
        const cardHotel = document.createElement("article")
        cardHotel.className = "card__hotel"
        containerHotels.appendChild(cardHotel)

        const imageHotel = document.createElement("img")
        imageHotel.className = "hotel__image"
        imageHotel.setAttribute("src", hotel.photo)
        imageHotel.setAttribute("alt", hotel.name)
        cardHotel.appendChild(imageHotel)

        const containerInfo = document.createElement("section")
        containerInfo.className = "container__info"
        cardHotel.appendChild(containerInfo)

        const hotelTitle = document.createElement("h2")
        hotelTitle.className = "hotel__title"
        hotelTitle.innerText = hotel.name
        containerInfo.appendChild(hotelTitle)

        const containerInfoCountry = document.createElement("section")
        containerInfoCountry.className = "container__info__country"
        containerInfo.appendChild(containerInfoCountry)

        const flagCountry = document.createElement("img")
        flagCountry.className = "flag__country"
        flagCountry.setAttribute("src", hotel.flag)
        containerInfoCountry.appendChild(flagCountry)

        const countryOfHotel = document.createElement("p")
        countryOfHotel.className = "country__hotel"
        countryOfHotel.innerText = hotel.country
        containerInfoCountry.appendChild(countryOfHotel)

        const starsHotels = document.createElement("p")
        starsHotels.className = "stars__hotel"
        starsHotels.innerText = hotel.price
        containerInfoCountry.appendChild(starsHotels)

        const sizeRoom = document.createElement("p")
        sizeRoom.className = "size__room"
        sizeRoom.innerText = hotel.rooms + " rooms"
        containerInfoCountry.appendChild(sizeRoom)

        const containerBookit = document.createElement("div")
        containerBookit.className = "container__bookit"
        containerInfo.appendChild(containerBookit)

        const buttonBookIt = document.createElement("button")
        buttonBookIt.className = "button__book__it"
        buttonBookIt.innerText = "Book It!"
        containerBookit.appendChild(buttonBookIt)

        const containerDescription = document.createElement("section")
        containerDescription.className = "container__description"
        cardHotel.appendChild(containerDescription)

        const descriptionHotel = document.createElement("p")
        descriptionHotel.className = "description__hotel"
        descriptionHotel.innerText = hotel.description
        containerDescription.appendChild(descriptionHotel)
    })
}
window.addEventListener("load", async () => {
    hotelData = await fetchingHotels()
    creatingHotels(hotelData)
})
const containerNoFound = document.createElement("section")
containerNoFound.className = "container__no__found"
containerNoFound.style.display = "none"
body.appendChild(containerNoFound)
const iconNoFound = document.createElement("img")
iconNoFound.className = "icon__no__found"
containerNoFound.appendChild(iconNoFound)
iconNoFound.src =
    "data:image/svg+xml,%3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' fill='%23004085' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 330 330' style='enable-background:new 0 0 330 330;' xml:space='preserve'%3e %3cg%3e %3cpath d='M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z'/%3e %3cpath d='M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991 c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z'/%3e %3cpath d='M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z '/%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3c/svg%3e"
const textNoFound = document.createElement("p")
textNoFound.className = "text__no__found"
containerNoFound.appendChild(textNoFound)
textNoFound.innerText =
    "No hotels left with those filters. Try a new combination of them."

const showNoFoundHotel = () => (containerNoFound.style.display = "flex")

const hideNoFoundHotel = () => (containerNoFound.style.display = "none")

buttonSearch.addEventListener("click", () => {
    const filteredHotels = hotelData
        .filter((hotel) =>
            selectCountry.value !== "All countries"
                ? hotel.country === selectCountry.value
                : hotel
        )
        .filter((hotel) => {
            if (selectSize.value === "Small") {
                return hotel.rooms < 15
            } else if (selectSize.value === "Medium") {
                return hotel.rooms >= 15 && hotel.rooms < 30
            } else if (selectSize.value === "Large") {
                return hotel.rooms > 30
            } else {
                return hotel
            }
        })
        .filter((hotel) =>
            selectPrice.value !== "All Categories"
                ? hotel.price === selectPrice.value
                : hotel
        )

    creatingHotels(filteredHotels)
    if (filteredHotels.length === 0) {
        showNoFoundHotel()
    } else {
        containerNoFound.style.display = "none"
    }
})
buttonClear.addEventListener("click", () => {
    selectCountry.value = "All countries"
    selectSize.value = "All Sizes"
    selectPrice.value = "All Categories"
    creatingHotels(hotelData)
    hideNoFoundHotel()
})
