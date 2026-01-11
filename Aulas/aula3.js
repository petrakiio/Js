//mini lista de tarefas

function adicionarTarefa(){
    let input = document.getElementById('input-tarefa')
    let tarefa = input.value
    document.getElementById('mensagem').textContent='Tarefa Adicionada:'+tarefa

    let Listatarefas = document.getElementById('listaTarefas')
    //cria elemento li
    let novaTarefa = document.createElement('li')
    
    //Adicionando valor do input
    novaTarefa.textContent=tarefa

    //Adiciona como filho
    Listatarefas.appendChild(novaTarefa)

    tarefa.value = ''
}
