// variaveis ids
const campo = document.getElementById("campo-nova-tarefa");
const botaoAdd = document.getElementById("botao-adicionar");
const botaoTema = document.getElementById("botao-tema");
const lista = document.getElementById("lista");
const body = document.body;

// add tarefas
function adicionarTarefa() {
    const texto = campo.value.trim();

    if(texto === "") {
        return;
    }
    
    const tarefa = document.createElement("li");
    tarefa.textContent = texto;
    lista.appendChild(tarefa);
    texto = "";
    
}

botaoAdd.addEventListener("click", adicionarTarefa);

// dark mode
function modoEscuro() {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")) {
        botaoTema.textContent = "Modo claro";
    }
    else {
        botaoTema.textContent = "Modo escuro";
    }
}

botaoTema.addEventListener("click", modoEscuro);