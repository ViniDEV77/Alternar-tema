// selecionar elementos por variaveis
const root = document.documentElement;
const btn = document.getElementById("btn-tema")
const ano = document.getElementById("ano")

// Automatizar data
ano.textContent = new Date().getFullYear()



// Tema Light/Dark
btn.addEventListener("click", () => {
    const Escuro = root.getAttribute("data-tema") === 'Escuro'

    if (Escuro) {
        root.removeAttribute('data-tema')
    } else {
        root.setAttribute('data-tema', 'Escuro')
    }
})