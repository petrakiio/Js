//mini lista de tarefas 
const btnTarefa = document.getElementById('adcTarefa')
const btnLimpar = document.getElementById('limpar')

btnTarefa.addEventListener('click', () =>{
        const inputTarefa = document.getElementById("inputTarefa")
        let tarefa = inputTarefa.value.trim()
        const mensagem = document.getElementById("mensagem")

        if (tarefa == "") {
            mensagem.textContent = "Digite uma tarefa!";
        } else {
            mensagem.textContent = "Tarefa adicionada com sucesso!"
            renderizar(tarefa);
        }
        inputTarefa.value = ""
})

function renderizar(textoDaTarefa) {
    const listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = textoDaTarefa
    listaTarefas.appendChild(novaTarefa)
}

btnLimpar.addEventListener('click', () => {
    
})