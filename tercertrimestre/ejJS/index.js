const colores = ["white", "yellow", "red", "green", "blue"];

document.querySelectorAll(".figura").forEach(figura => {
  let colorIndex = 0;

  figura.addEventListener("click", e => {
    e.preventDefault();

    if (figura.classList.contains("triangulo")) {
      colorIndex = (colorIndex + 1) % colores.length;
      const polygon = figura.querySelector("polygon");
      if (polygon) {
        polygon.setAttribute("fill", colores[colorIndex]);
      }
    } else {
      colorIndex = (colorIndex + 1) % colores.length;
      figura.style.backgroundColor = colores[colorIndex];
    }

    actualizarTabla();
  });

  figura.addEventListener("contextmenu", e => {
    e.preventDefault();
    if (contenedor.contains(figura)) {
      figura.remove();
      actualizarTabla();
    }
  });

  figura.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", figura.outerHTML);
    figura.classList.add("dragging");
  });

  figura.addEventListener("dragend", e => {
    figura.classList.remove("dragging");
  });
});

const contenedor = document.getElementById("contenedor");

contenedor.addEventListener("drop", e => {
  e.preventDefault();

  const html = e.dataTransfer.getData("text/plain");
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const figuraClon = tempDiv.firstElementChild;

  figuraClon.style.position = "absolute";

  const rect = contenedor.getBoundingClientRect();
 const figuraSize = 50;       // Ancho/alto de las figuras
const padding = 2;           // Espacio de seguridad con el borde

let x = e.clientX - rect.left - figuraSize / 2;
let y = e.clientY - rect.top - figuraSize / 2;

const maxX = rect.width - figuraSize - padding;
const maxY = rect.height - figuraSize - padding;

x = Math.max(padding, Math.min(x, maxX));
y = Math.max(padding, Math.min(y, maxY));

figuraClon.style.left = `${x}px`;
figuraClon.style.top = `${y}px`;


  contenedor.appendChild(figuraClon);

  figuraClon.addEventListener("click", e => {
    e.preventDefault();
    const esTriangulo = figuraClon.classList.contains("triangulo");
    let colorActual;
    let polygon;

    if (esTriangulo) {
      polygon = figuraClon.querySelector("polygon");
      colorActual = polygon ? polygon.getAttribute("fill") : "white";
    } else {
      colorActual = figuraClon.style.backgroundColor || "white";
    }

    const index = colores.indexOf(colorActual);
    const nuevoIndex = (index + 1) % colores.length;

    if (esTriangulo && polygon) {
      polygon.setAttribute("fill", colores[nuevoIndex]);
    } else {
      figuraClon.style.backgroundColor = colores[nuevoIndex];
    }

    actualizarTabla();
  });

  figuraClon.addEventListener("contextmenu", e => {
    e.preventDefault();
    figuraClon.remove();
    actualizarTabla();
  });

  actualizarTabla();
  hacerArrastrableDentro(figuraClon);
});

function actualizarTabla() {
  const conteo = {
    cuadrado: { white: 0, yellow: 0, red: 0, green: 0, blue: 0 },
    circulo:  { white: 0, yellow: 0, red: 0, green: 0, blue: 0 },
    triangulo:{ white: 0, yellow: 0, red: 0, green: 0, blue: 0 }
  };

  document.querySelectorAll('#contenedor .figura').forEach(figura => {
    let tipo = null;

    if (figura.classList.contains('cuadrado')) tipo = 'cuadrado';
    else if (figura.classList.contains('circulo')) tipo = 'circulo';
    else if (figura.classList.contains('triangulo')) tipo = 'triangulo';

    if (!tipo) return;

    let color;
    if (tipo === "triangulo") {
      const polygon = figura.querySelector("polygon");
      color = polygon ? polygon.getAttribute("fill") : "white";
    } else {
      color = window.getComputedStyle(figura).backgroundColor;
    }

    color = color.replace(/\s/g, '');

    const mapaColores = {
      'rgb(255,255,255)': 'white',
      'rgb(255,255,0)': 'yellow',
      'rgb(255,0,0)': 'red',
      'rgb(0,128,0)': 'green',
      'rgb(0,0,255)': 'blue',
      'white': 'white',
      'yellow': 'yellow',
      'red': 'red',
      'green': 'green',
      'blue': 'blue'
    };

    const nombreColor = mapaColores[color];
    if (nombreColor) conteo[tipo][nombreColor]++;
  });

  document.querySelectorAll("#tablaResumen td").forEach(td => {
    const tipo = td.getAttribute("data-tipo");
    const color = td.getAttribute("data-color");
    td.textContent = conteo[tipo]?.[color] ?? 0;
  });
}

function hacerArrastrableDentro(figura) {
  let offsetX, offsetY;

  figura.addEventListener("mousedown", function (e) {
    if (!contenedor.contains(figura)) return;
    if (e.button !== 0) return;

    const rect = figura.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    function mover(e) {
      const contRect = contenedor.getBoundingClientRect();
      const figuraWidth = figura.offsetWidth;
      const figuraHeight = figura.offsetHeight;

      let x = e.clientX - contRect.left - offsetX;
      let y = e.clientY - contRect.top - offsetY;

      x = Math.max(0, Math.min(x, contRect.width - figuraWidth));
      y = Math.max(0, Math.min(y, contRect.height - figuraHeight));

      figura.style.left = `${x}px`;
      figura.style.top = `${y}px`;
    }

    function soltar() {
      document.removeEventListener("mousemove", mover);
      document.removeEventListener("mouseup", soltar);
    }

    document.addEventListener("mousemove", mover);
    document.addEventListener("mouseup", soltar);
  });
}
