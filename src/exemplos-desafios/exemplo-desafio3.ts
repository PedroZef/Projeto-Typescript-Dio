// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma")! as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");

let saldoTotal = 0;

limparSaldo();

function limparSaldo() {
  if (campoSaldo) {
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();
  }
}

if (botaoAtualizar) {
  botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
  });
}

function somarAoSaldo(soma: number) {
  if (!isNaN(soma)) {
    if (campoSaldo) {
      saldoTotal += soma;
      console.log(saldoTotal);
      campoSaldo.innerHTML = saldoTotal.toString();
      limparCampoSoma();
    }
  } else {
    alert(`Por favor insira um número válido para soma!`);
    limparCampoSoma();
  }
}

if (botaoLimpar) {
  botaoLimpar.addEventListener("click", function () {
    limparSaldo();
  });
}

function limparCampoSoma() {
  soma.value = "./";
}
