const btnt = document.getElementById('adcTarefa')
const mensagem = document.getElementById("mensagem")
let tarefas = []

btnt.addEventListener('click', () =>{
    const inputTarefa = document.getElementById("input-tarefa")
    let tarefa = inputTarefa.value.trim()



    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
        mensagem.className='erro'
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.className='pass'
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
})

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (let i = 0 ; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        //botão de remover
        removebtn()
        novaTarefa.appendChild(removebtn)
        //botão de editar
        editarbtn()

        novaTarefa.appendChild(editorbtn)
        listaTarefas.appendChild(novaTarefa)
    }
    if (tarefas.length === 3){
            criarbtn()
        }
}

function removebtn(){
    const removebtn = document.createElement('button')
        removebtn.textContent='Remover'
        removebtn.className='remover'
        removebtn.onclick= () => removertarefa(i) //arrow function
}
function editarbtn(){
    const editorbtn = document.createElement('button')
        editorbtn.textContent='Editar'
        editorbtn.className='editar'
        editorbtn.onclick = () => editartarefa(i)
}

function criarbtn(){
    //evita botões duplicados
    if (document.querySelector('.botao_lista')) return;

    const btnL = document.createElement('button')
    btnL.textContent='Esvaziar lixeira'
    btnL.onclick = () => esvaziar()
    btnL.className='botao_lista'

    //adicionar no .container
    document.querySelector('.container').appendChild(btnL)
}

function esvaziar(){
    tarefas.length = 0
    mensagem.textContent='Lista limpa'
    mensagem.className='pass'
    const btn = document.querySelector('.botao_lista')
    if (tarefas.length === 0) btn.remove() 
    renderizarTarefas()
}

function removertarefa(indice){
    tarefas.splice(indice, 1)
    renderizarTarefas()
}
function editartarefa(indece){
    const tarefaEditada = prompt('Edite a sua tarefa').trim()
    if (tarefaEditada === ''){
        mensagem.textContent='Coloque um novo nome pra editar!'
        mensagem.className='erro'
    }else{
        tarefas[indece] = tarefaEditada
        renderizarTarefas()
    }
}