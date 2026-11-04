// variaveis ids
const campo = document.getElementById("campo-nova-tarefa");
const botaoAdd = document.getElementById("botao-adicionar");
const botaoTema = document.getElementById("botao-tema");
const lista = document.getElementById("lista");

function adicionarTarefa() {
    if(campo.value === "") {
        return;
    } 
    else {
        const tarefa = document.createElement("li");
        tarefa.textContent = campo.value;
        lista.appendChild(tarefa);
        campo.value = "";
    }
}

botaoAdd.addEventListener("click", adicionarTarefa);