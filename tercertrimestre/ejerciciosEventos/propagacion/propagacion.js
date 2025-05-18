// Elementos del DOM
const padre = document.getElementById("padre");       
const hijo1 = document.getElementById("hijo1");        
const hijo2 = document.getElementById("hijo2");         
const enlace = document.getElementById("enlace");     
const boton = document.getElementById("botonToggle");  
const mensaje = document.getElementById("mensaje");     
let enlaceActivo = true; 

// Evento click sobre el padre
padre.addEventListener("click", () => {
  console.log("click en PADRE");
  mensaje.textContent = "click en PADRE";              
});

hijo1.addEventListener("click", (e) => {
  e.stopPropagation();                                 
  console.log("click (con stopPropagation)");  
  mensaje.textContent = "click(con stopPropagation)";
});

hijo2.addEventListener("click", () => {
  console.log("click(sin stopPropagation)");
  mensaje.textContent = "click (sin stopPropagation)";
});

// Evento sobre el enlace
enlace.addEventListener("click", (e) => {
  if (!enlaceActivo) {                                 
    e.preventDefault();                                 // evita abrir la página
    console.log("preventDefault activado → Enlace bloqueado");
    mensaje.textContent = "preventDefault activado → Enlace bloqueado";
  }
});

// Evento del botón para activar o desactivar el enlace
boton.addEventListener("click", () => {
  enlaceActivo = !enlaceActivo;                         
  mensaje.textContent = enlaceActivo  ? "Enlace ACTIVADO" : "Enlace DESACTIVADO";  
});