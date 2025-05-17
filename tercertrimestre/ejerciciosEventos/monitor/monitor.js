const zona = document.getElementById("zona-interaccion");
const circulo = document.getElementById("circulo");
const lista = document.getElementById("lista-eventos");
const btnLimpiar = document.getElementById("limpiar");

function registrar(texto) {
  const hora = new Date().toLocaleTimeString();
  const li = document.createElement("li");
  li.textContent = `[${hora}] ${texto}`;
  lista.appendChild(li);
  lista.scrollTop = lista.scrollHeight;
}

// Eventos de mouse
zona.addEventListener("mouseenter", () => registrar("El cursor entró en el div"));
zona.addEventListener("mouseleave", () => registrar("El cursor salió del div"));
zona.addEventListener("click", () => registrar("Click dentro del div"));
zona.addEventListener("contextmenu", e => {
  e.preventDefault();
  registrar("Click derecho dentro del div");
});

// Eventos de drag
circulo.addEventListener("dragstart", () => registrar("El círculo está siendo arrastrado"));

// Permitir soltar en cualquier parte del documento
document.addEventListener("dragover", e => e.preventDefault());

document.addEventListener("drop", e => {
  e.preventDefault();

  circulo.style.position = "absolute";
  circulo.style.left = `${e.pageX - circulo.offsetWidth / 2}px`;
  circulo.style.top = `${e.pageY - circulo.offsetHeight / 2}px`;

  if (!zona.contains(e.target)) {
    registrar("El círculo fue soltado fuera del div de interacción");
  } else {
    registrar("El círculo fue soltado dentro del div de interacción");
  }
});

// Otros eventos
window.addEventListener("resize", () => registrar("La ventana ha cambiado de tamaño"));
window.addEventListener("focus", () => registrar("Se ha vuelto a la ventana"));
window.addEventListener("blur", () => registrar("Se ha alejado de la ventana"));
btnLimpiar.addEventListener("click", () => lista.innerHTML = "");
window.addEventListener("load", () => registrar("La página se ha recargado"));
