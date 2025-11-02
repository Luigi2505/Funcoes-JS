const out = document.getElementById("saida");

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) return "Erro: divisão por zero!";
  return a / b;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(function (n) {
  return n % 2 === 0;
});

function calcularMedia(arr) {
  let soma = arr.reduce(function (acumulador, numero) {
    return acumulador + numero;
  }, 0);

  return soma / arr.length;
}

const media = calcularMedia(numeros);

function executarOperacao(a, b, operacaoCallback) {
  return operacaoCallback(a, b);
}

out.innerHTML += "Operações básicas:\n";
out.innerHTML += `Soma: ${soma(5, 3)}\n`;
out.innerHTML += `Subtração: ${subtracao(5, 3)}\n`;
out.innerHTML += `Multiplicação: ${multiplicacao(5, 3)}\n`;
out.innerHTML += `Divisão: ${divisao(5, 3)}\n\n`;

out.innerHTML += "Manipulação de Array:\n";
out.innerHTML += `Números: ${numeros.join(", ")}\n`;
out.innerHTML += `Números pares: ${pares.join(", ")}\n`;
out.innerHTML += `Média: ${media.toFixed(2)}\n\n`;

out.innerHTML += "Função com Callback:\n";
out.innerHTML += `Executando callback (multiplicação): ${executarOperacao(
  4,
  5,
  multiplicacao
)}\n`;
out.innerHTML += `Executando callback (soma): ${executarOperacao(
  10,
  2,
  soma
)}\n`;
