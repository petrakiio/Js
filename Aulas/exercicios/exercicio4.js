const card = document.getElementById('grid')
const n = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
n.sort(() => Math.random() - 0.5)

let primeirocard = null
let segundocard = null
let travado = false

for(const valor of n){
    const bloco = document.createElement('div')
    bloco.classList.add('card')
    bloco.dataset.valor = valor
    bloco.textContent=''

    bloco.addEventListener('click', ()=>verificar(bloco))

    card.appendChild(bloco)
}

function verificar(bloco){
    let card_click = bloco.dataset.valor
    primeirocard = card_click
    segundocard = card_click
    bloco.classList.add('revelado')
    bloco.textContent = card_click
    console.log(primeirocard,segundocard)
}