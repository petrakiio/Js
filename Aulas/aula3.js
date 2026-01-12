//mini lista de tarefas

function adicionarTarefa(){
    const input = document.getElementById('input-tarefa')
    const tarefa = input.value
    const paragrafo = document.getElementById('mensagem')
    if (tarefa === ''){
        paragrafo.textContent='Erro,Não é possivel adicionar uma tarefa vazia'
        paragrafo.className='erro'
        
    }else{
        paragrafo.textContent='Tarefa Adicionada:'+tarefa
        paragrafo.className='coreto'
        const Listatarefas = document.getElementById('listaTarefas')
        //cria elemento li
        const novaTarefa = document.createElement('li')
        //Adicionando valor do input
        novaTarefa.textContent=tarefa

        //Adiciona como filho
        Listatarefas.appendChild(novaTarefa)

        tarefa.value = ''
    }
}

//função pra limpar lista
function limpar(){
    const Listatarefas = document.getElementById('listaTarefas')
    //limpa tudo
    Listatarefas.innerHTML=''
}