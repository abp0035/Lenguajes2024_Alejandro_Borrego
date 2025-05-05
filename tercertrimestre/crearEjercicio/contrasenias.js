function obtenerRandom(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
  }
  
  function generar() {
    const longitud = parseInt(document.getElementById("longitud").value);
    const usarMayus = document.getElementById("mayus").checked;
    const usarMinus = document.getElementById("minus").checked;
    const usarNum = document.getElementById("num").checked;
    const usarSimbolos = document.getElementById("simbolos").checked;
  
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%&*()_+";
  
    let caracteres = "";
    let obligatorios = "";
  
    if (usarMayus) {
      caracteres += mayus;
      obligatorios += obtenerRandom(mayus);
    }
    if (usarMinus) {
      caracteres += minus;
      obligatorios += obtenerRandom(minus);
    }
    if (usarNum) {
      caracteres += numeros;
      obligatorios += obtenerRandom(numeros);
    }
    if (usarSimbolos) {
      caracteres += simbolos;
      obligatorios += obtenerRandom(simbolos);
    }
  
    if (caracteres.length === 0 || isNaN(longitud) || longitud < obligatorios.length) {
      document.getElementById("resultado").textContent = "⚠️ Selecciona opciones válidas.";
      return;
    }
  
    let resultado = obligatorios;
  
    while (resultado.length < longitud) {
      resultado += obtenerRandom(caracteres);
    }
  
  // Mezclar para que no empiece siempre por mayuscua
    resultado = resultado.split('').sort(() => Math.random() - 0.5).join('');
  
    document.getElementById("resultado").textContent = resultado;
  }

  function copiarAlPortapapeles() {
    const resultado = document.getElementById("resultado").textContent;
    if (resultado.trim() === "") return;
  
    navigator.clipboard.writeText(resultado)
      .then(() => {
        document.getElementById("mensajeCopiado").textContent = "✅ Copiada al portapapeles";
      })
     
  }
  