
function contarDivs() {
    const todos = document.querySelectorAll(".zona-divs .caja");
      let conContenido = 0;

      todos.forEach(div => {
      if (div.textContent.trim() !== "") {
        conContenido++;
      }
    });
  
    // Mostrar el resultado en pantalla
    const resultado = document.getElementById("resultadoDivs");
    resultado.innerHTML = `
      <strong>Total de divs:</strong> ${todos.length}<br>
      <strong>Con contenido:</strong> ${conContenido}<br>
      <strong>Vacíos:</strong> ${todos.length - conContenido}
    `;
  }
  
  
  
  // Seleccionamos el div que queremos modificar
  const tarjeta = document.getElementById("tarjeta");
  // color de fondo 
  function cambiarFondo() {
    tarjeta.classList.toggle("fondo-color");
  }
  // borde punteado
  function bordesPunteados() {
    tarjeta.classList.toggle("borde-punteado");
  }
  // redondea las esquinas 
  function bordesRedondeados() {
    tarjeta.classList.toggle("borde-redondeado");
  }
  //  agranda el tamaño
  function agrandar() {
    tarjeta.classList.add("grande");     
    tarjeta.classList.remove("chico");   
  }
  function tamanoGrande() {
    tarjeta.classList.add("grande");
    tarjeta.classList.remove("chico");
  }
  //  hace la tarjeta más pequeña
  function tamanoChico() {
    tarjeta.classList.add("chico");
    tarjeta.classList.remove("grande");
  }
  //  oculta o muestra la tarjeta
  function desaparecer() {
    tarjeta.classList.toggle("oculto");
  }
  