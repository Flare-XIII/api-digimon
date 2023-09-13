const URL_BASE = "https://digimon-api.vercel.app/api/digimon"

let searchDigimon = document.getElementById('inputDigimon')
let buttonDigimon = document.getElementById('searchDigimon')
let card = document.getElementById('card')

function getOneDigimon () {
    buttonDigimon.addEventListener('click', function (event) {
        event.preventDefault()
        let getDigimon = searchDigimon.value
        fetch(`${URL_BASE}${getDigimon}`).then(response => response.json()).then(digimon => showCard(digimon))
    })
}

function getAllDigimon () {
    fetch(URL_BASE).then(response => response.json()).then(digimon => {
        let digimones = digimon.content

        let card = ''

        digimones.forEach(oneDigimon => {

            card += `
            <div class="card" style="width: 18rem;">
                <img src="${oneDigimon.image}" class="card-img-top" alt="./assets/img/noDigimon.png">
                <div class="card-body">
                    <h5 class="card-title">${oneDigimon.name}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `

            tarjeta.innerHTML = card
        })
    })
} 

function showCard (digimon) {

    let card = `
    <div class="card" style="width: 18rem;">
        <img src="${digimon.images[0].href}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${digimon.name}</h5>
            <p class="card-text">${digimon.descriptions[1].description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
    tarjeta.innerHTML = card
}

getAllDigimon()
getOneDigimon()

const darkMode = document.getElementById('darkMode');

darkMode.addEventListener ('click', function () {

    const body = document.body;

    if (body.style.backgroundColor === black) {
        body.style.backgroundColor = 'rgba(0, 3, 36, 0.684)';
    } else {
        body.style.backgroundColor = 'black';
    }
});