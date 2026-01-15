const  tema = document.body
const claro = document.getElementById('claro')
const escuro = document.getElementById('escuro')

claro.addEventListener('click', () =>{
    tema.classList.remove('escuro')
    tema.classList.add('claro')
})

escuro.addEventListener('click', () =>{
    tema.classList.remove('claro')
    tema.classList.add('escuro')
})