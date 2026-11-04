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
    const check = document.createElement("button");
    const textoTarefa = document.createElement("span");

    textoTarefa.textContent = texto;
    tarefa.appendChild(check);
    tarefa.appendChild(textoTarefa);
    lista.appendChild(tarefa);

    campo.value = "";

    check.type = "button";
    check.addEventListener("click", marcarTarefa);

    function marcarTarefa() {
        textoTarefa.classList.toggle("concluida");
    }
}

botaoAdd.addEventListener("click", adicionarTarefa);

// apertar enter
function verificarTecla(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        botaoAdd.click();
    }
}

campo.addEventListener("keypress", verificarTecla);

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