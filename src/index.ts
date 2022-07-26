let contador = document.getElementById("contador");
let btnInc = document.getElementById("incrementar");
let btnDec = document.getElementById("decrementar");
let numero: number = 0;

function numSumar() {
  numero++;
  contador.innerHTML = "Contador " + numero;
}
function numRestar() {
  numero--;
  contador.innerHTML = "Contador " + numero;
}

btnInc.addEventListener("click", numSumar);

btnDec.addEventListener("click", numRestar);
