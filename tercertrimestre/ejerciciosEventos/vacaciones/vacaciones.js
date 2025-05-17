const unicornio = document.getElementById("unicornio");
const destinos = document.querySelectorAll(".destino");
const mensaje = document.getElementById("mensaje");
const zonaUnicornio = document.getElementById("zona-unicornio");
const volverBtn = document.getElementById("volverBtn");


unicornio.addEventListener("dragstart", () => {
  unicornio.classList.add("brillo");
});

unicornio.addEventListener("dragend", () => {
  unicornio.classList.remove("brillo");
});


destinos.forEach(destino => {
  
  destino.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  destino.addEventListener("drop", (e) => {
    e.preventDefault(); 

    destino.appendChild(unicornio);

    // Con css lo fijamos en el centro 
    unicornio.style.position = "absolute";
    unicornio.style.top = "50%";
    unicornio.style.left = "50%";
    unicornio.style.transform = "translate(-50%, -50%)";

    const lugar = destino.dataset.destino;
    mensaje.textContent = `¡Me voy a ${lugar}!`;
  });
});


volverBtn.addEventListener("click", () => {
  zonaUnicornio.appendChild(unicornio);

  unicornio.style.position = "relative";
  unicornio.style.top = "0";
  unicornio.style.left = "0";
  unicornio.style.transform = "none";

  // ponemos de nuevo el mensaje inciial
  mensaje.textContent = "Me voy de vacaciones...";
});