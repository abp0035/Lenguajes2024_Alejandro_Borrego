const cuadro = document.getElementById('cuadro');

document.addEventListener('keydown', function(event) {
  const letra = event.key.toUpperCase();
  if (letra >= 'A' && letra <= 'Z') {
    cuadro.textContent = letra; 
  }
});

document.addEventListener('keyup', function() {
  cuadro.textContent = ''; 
});