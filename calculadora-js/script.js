let visor = document.getElementById('visor');

function adicionar(valor) {
  visor.value += valor;
}

function limpar() {
  visor.value = '';
}

function calcular() {
  try {
    visor.value = eval(visor.value);
  } catch (e) {
    visor.value = 'Erro';
  }
}
