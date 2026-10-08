let numeroDeCaixas = 16;

const area = document.querySelector(".grade")

for(let i = 0; i < (numeroDeCaixas * numeroDeCaixas); i++){
    const caixa = document.createElement("div");
    caixa.classList.add("box")

    // calcula o tamanho que a caixa precisa ter, para caber as demais também
    caixa.style.flexBasis = `calc(500px / ${numeroDeCaixas})`
    area.appendChild(caixa)
}

