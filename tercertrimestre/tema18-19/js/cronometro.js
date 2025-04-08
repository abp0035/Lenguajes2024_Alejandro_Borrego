let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo; 
const min = document.getElementById('min');
const seg = document.getElementById('seg');
const mil = document.getElementById('mil');
const btnIniciar = document.getElementById('iniciar');
const btnParar = document.getElementById('parar');
const btnReiniciar = document.getElementById('reiniciar');

function actualizarCronometro() {
  milisegundos += 10;

  if (milisegundos >= 1000) {
    milisegundos = 0;
    segundos++;
  }

  if (segundos >= 60) {
    segundos = 0;
    minutos++;
  }

  min.textContent = minutos.toString().padStart(2, '0');
  seg.textContent = segundos.toString().padStart(2, '0');
  mil.textContent = milisegundos.toString().padStart(3, '0');
}

btnIniciar.addEventListener('click', () => {
  if (!intervalo) {
    intervalo = setInterval(actualizarCronometro, 10); 
  }
});

btnParar.addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
});

btnReiniciar.addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
  minutos = 0;
  segundos = 0;
  milisegundos = 0;

  min.textContent = '00';
  seg.textContent = '00';
  mil.textContent = '000';
});