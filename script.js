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

    check.type = "button";
    check.textContent = "✔";
    check.setAttribute("aria-label", "Marcar tarefa como concluída.");
    check.addEventListener("click", () => {
        textoTarefa.classList.toggle("concluida");
    });

    textoTarefa.textContent = texto;
    
    tarefa.appendChild(check);
    tarefa.appendChild(textoTarefa);
    lista.appendChild(tarefa);

    campo.value = "";
}

botaoAdd.addEventListener("click", adicionarTarefa);

// apertar enter
function verificarTecla(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        botaoAdd.click();
    }
}

campo.addEventListener("keydown", verificarTecla);

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