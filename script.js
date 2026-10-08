let numeroDeCaixas = 16;

const area = document.querySelector(".grade");

function fazGrade() {
  const caixasAntigas = area.querySelectorAll(".box");
  for (let i = 0; i < caixasAntigas.length; i++) {
    caixasAntigas[i].remove();
  }

  for (let i = 0; i < numeroDeCaixas * numeroDeCaixas; i++) {
    const caixa = document.createElement("div");
    caixa.classList.add("box");

    // calcula o tamanho que a caixa precisa ter, para caber as demais também
    caixa.style.flexBasis = `calc(600px / ${numeroDeCaixas})`;
    area.appendChild(caixa);
  }

  const caixa = document.querySelectorAll(".box");

  caixa.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (coloridoAtivado) {
        item.style.background = `rgb(${Math.floor(Math.random() * (255 - 0) + 1)} ${Math.floor(Math.random() * (255 - 0) + 1)} ${Math.floor(Math.random() * (255 - 0) + 1)} / 100%)`;
      } else {
        item.classList.add("backgroundBox");
      }
    });
  });
}

const quantidade = document.querySelector("#quantidade");

quantidade.addEventListener("click", (e) => {
  numeroDeCaixas = Number(
    prompt(
      "⏹ NÚMERO DE QUADRADOS\n\nEscolha o número de quadrados para formar a grade\nMIN: 1 | MÁX: 100",
    ),
  );

  while (numeroDeCaixas < 1 || numeroDeCaixas > 100) {
    alert(
      "Você digitou: " +
        numeroDeCaixas +
        "\n\nDigite um número valido de 1 a 100",
    );
    numeroDeCaixas = Number(
      prompt(
        "⏹ NÚMERO DE QUADRADOS\n\nEscolha o número de quadrados para formar a grade\nMIN: 1 | MÁX: 100",
      ),
    );
  }

  fazGrade();
});

fazGrade();

const limpar = document.querySelector("#clear");

limpar.addEventListener("click", () => {
  const grade = document.querySelector(".grade");
  let caixasPintadas = grade.querySelectorAll("div");
  caixasPintadas.forEach((item) => {
    item.classList.remove("backgroundBox");
    item.style.removeProperty("background");
  });
});

let coloridoAtivado = false;

const colorido = document.querySelector("#colorido");

colorido.addEventListener("click", () => {
  coloridoAtivado = true;
  fazGrade();
});
