const cores = ['blue','red','green','yellow','lightgreen','brown','white','black']
const btn = document.getElementById('btn')
const body = document.body

btn.addEventListener('click',() =>{
    let cor = Math.random(cores)
    body.style.background=cor
})