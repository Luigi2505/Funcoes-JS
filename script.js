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
