let numeroDeCaixas = 16;

const area = document.querySelector("div")

for(let i = 0; i < numeroDeCaixas; i++){
    const caixa = document.createElement("div");
    caixa.classList.add("box")
    area.appendChild(caixa)
}

