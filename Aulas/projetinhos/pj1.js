const inputEmail = document.getElementById('email')
const inputSenha = document.getElementById('senha')
const resposta = document.getElementById('resposta')

function verificar(){
    const email = inputEmail.value
    const senha = inputSenha.value
    if (email === 'pedro123@gmail.com' && senha === '123'){
        resposta.className='sucesso'
        resposta.textContent='Login correto'
    }else{
        resposta.className='erro'
        resposta.textContent='Login incorreto'
    }
}