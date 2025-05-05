
function obtenerRandom(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
  }
  
  function generar() {
      // Obtiene el valor ingresado por el usuario para la longitud 
    const longitud = parseInt(document.getElementById("longitud").value);
      // verifica qué tipos de caracteres quiere incluir el usuario, las casillas que marca
    const usarMayus = document.getElementById("mayus").checked;
    const usarMinus = document.getElementById("minus").checked;
    const usarNum = document.getElementById("num").checked;
    const usarSimbolos = document.getElementById("simbolos").checked;
  
    //defnine en cada tipo los conjuntos disponibles
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%&*()_+";
  
    //declara la variable caracter y una obligatoria para en el siguiente apartado obligar a que haya un caracter de cada tipo
    let caracteres = "";
    let obligatorios = "";
    //Pada cada caso, se verifica que haya al menos un caracter de dicho tipo 
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
  
    let resultado = obligatorios;
  
    //confirma que se rellena la contraseña hasta que alcance la longitud indicada por el usuario
    while (resultado.length < longitud) {
      resultado += obtenerRandom(caracteres);
    }
  
  // Mezclar para que no empiece siempre por el caracter obligatorio, si no que este en una posicion aleatoria
    resultado = resultado.split('').sort(() => Math.random() - 0.5).join('');
  
    document.getElementById("resultado").textContent = resultado;
  }

  // Funcionalidad de copiar la contraseña
  function copiarAlPortapapeles() {
    const resultado = document.getElementById("resultado").textContent;
    //si no hay contraseña no devuelve nada 
    if (resultado.trim() === "") return;
  
    navigator.clipboard.writeText(resultado)
      .then(() => {
        document.getElementById("mensajeCopiado").textContent = "Copiada al portapapeles";
      })
     
    
  }
  