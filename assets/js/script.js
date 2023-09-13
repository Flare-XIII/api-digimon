const URL_BASE = "https://digimon-api.vercel.app/api/digimon"

let searchDigimon = document.getElementById('inputDigimon')
let buttonDigimon = document.getElementById('searchButton')
let card = document.getElementById('cardSuccess')

function showCard (digimon) {
    let digimonCard = `
    <div class="card" style="width: 18rem;">
        <img src="${digimon.img}" class="card-img-top" alt="./assets/img/noDigimon.png">
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
            <img src="${oneDigimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${oneDigimon.name}</h5>
            <button type="button" class="btn btn-primary">Primary</button>
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