const URL_BASE = "https://digimon-api.vercel.app/api/digimon"

let searchDigimon = document.getElementById('inputDigimon')
let buttonDigimon = document.getElementById('searchButton')
let card = document.getElementById('cardSuccess')

function showCard (digimon) {
    let digimonCard = `
    <div class="card" style="width: 18rem;">
        <img src="${digimon.img}" class="card-img-top rounded" alt="img digimon">
        <div class="card-body">
            <h5 class="card-title">${digimon.name}</h5>
            <p class="card-text">${digimon.level}</p>
        </div>
    </div>
    `
    cardSuccess.innerHTML = digimonCard
}

function getOneDigimon () {
    buttonDigimon.addEventListener('click', function (event) {
        event.preventDefault()
        let getDigimon = searchDigimon.value
        fetch(`${URL_BASE}/name/${getDigimon}`).then(response => response.json()).then(digimon => showCard(digimon[0]))
    })
}

function getAllDigimon () {
    fetch(URL_BASE).then(response => response.json()).then(digimon => {

        let card = ''

        digimon.forEach(oneDigimon => {

            card += `
            <div class = "col-xl-3 col-lg-4 mb-4 mb-md-3 col-md-6 col-sm-12"
            <div class="card" style="width: 18rem;">
            <img src="${oneDigimon.img}" class="card-img-top rounded" alt="img digimon">
            <div class="card-body">
            <h5 class="card-title">${oneDigimon.name}</h5>
            </div>
            </div>
            </div>
            `
            cardSuccess.innerHTML = card
        })
    })
}

getAllDigimon()
getOneDigimon()

const darkMode = function() {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill blackFont");
}

const defaultMode = function() {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const changeTheme = function() {
    if (document.querySelector("body").getAttribute("data-bs-theme") === "light") {
        darkMode();
    } else {
        defaultMode();
    }
}