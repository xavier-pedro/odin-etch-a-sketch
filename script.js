let numeroDeCaixas = 10;

const area = document.querySelector(".grade")


function fazGrade(){
    
  const caixasAntigas = area.querySelectorAll(".box")
  for(let i = 0; i < caixasAntigas.length; i++){
    caixasAntigas[i].remove()
  }

  for (let i = 0; i < numeroDeCaixas * numeroDeCaixas; i++) {
    const caixa = document.createElement("div");
    caixa.classList.add("box");

    // calcula o tamanho que a caixa precisa ter, para caber as demais também
    caixa.style.flexBasis = `calc(600px / ${numeroDeCaixas})`;
    area.appendChild(caixa);
  }
}

const quantidade = document.querySelector("#quantidade")

quantidade.addEventListener('click', (e) => {
    numeroDeCaixas = Number(
      prompt(
        "⏹ NÚMERO DE QUADRADOS\n\nEscolha o número de quadrados para formar a grade\nMIN: 1 | MÁX: 100", 
      ),
    );

    while(numeroDeCaixas < 1 || numeroDeCaixas > 100){

        alert("Você digitou: " + numeroDeCaixas + "\n\nDigite um número valido de 1 a 100")    
        numeroDeCaixas = Number(
          prompt(
            "⏹ NÚMERO DE QUADRADOS\n\nEscolha o número de quadrados para formar a grade\nMIN: 1 | MÁX: 100",
          ),
        );
    }

    fazGrade();
})

fazGrade();

