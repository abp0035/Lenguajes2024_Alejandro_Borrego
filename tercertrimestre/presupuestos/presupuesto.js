function calcular() {
    const ancho = parseFloat(document.getElementById("ancho").value);           
    const alto = parseFloat(document.getElementById("alto").value);            
    const profundidad = parseFloat(document.getElementById("profundidad").value); 
    const material = document.getElementById("material").value;               
      const precioBase = parseFloat(document.getElementById("precioBase").value);      
    const incPlastico = parseFloat(document.getElementById("incPlastico").value);    
    const incCarton = parseFloat(document.getElementById("incCarton").value);        
    const incMadera = parseFloat(document.getElementById("incMadera").value);        
    const iva = parseFloat(document.getElementById("iva").value);                    
  
    const resultado = document.getElementById("resultado"); 
  

    const dimensiones = [ancho, alto, profundidad];
  
    if (dimensiones.some(d => d < 5 || d > 100)) {
      resultado.innerHTML = "Las dimensiones deben estar entre 5 cm y 100 cm.";
      return; 
    }
  
    const max = Math.max(...dimensiones);
    const min = Math.min(...dimensiones);
    if (max / min > 5) {
      resultado.innerHTML = "No se permite que una dimensión supere en más de 5 veces a otra.";
      return;
    }

    const volumen = (ancho * alto * profundidad) / 1000; 
    const superficie = ancho * alto; 
  
    let incremento = 0;
  
    // Asignar el porcentaje de incremento según el material seleccionado
    switch (material) {
      case "plastico":
        incremento = incPlastico;
        break;
      case "carton":
        incremento = incCarton;
        break;
      case "madera":
        incremento = incMadera;
        break;
    }
  
    // Calcular precios
    const precioSinIVA = (volumen / 1000) * precioBase * (1 + incremento / 100);
      const precioConIVA = precioSinIVA * (1 + iva / 100);

    resultado.innerHTML = `
      <strong>Dimensiones de la caja:</strong> ${ancho} x ${alto} x ${profundidad} cm<br>
      <strong>Volumen en cm³:</strong> ${(ancho * alto * profundidad).toFixed(2)}<br>
      <strong>Superficie en cm²:</strong> ${superficie.toFixed(2)}<br>
      <strong>Material seleccionado:</strong> ${material.charAt(0).toUpperCase() + material.slice(1)}<br>
      <strong>Precio sin IVA:</strong> ${precioSinIVA.toFixed(2)} €<br>
      <strong>Precio con IVA:</strong> ${precioConIVA.toFixed(2)} €
    `;
  }
  