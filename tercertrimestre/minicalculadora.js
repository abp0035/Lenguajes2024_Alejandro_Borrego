<body>
    <!-- Etiqueta de entrada para el primer número -->
    <label>Primer número: <input type="number" id="numero1"></label><br>
    <!-- Etiqueta de entrada para el segundo número -->
    <label>Segundo número: <input type="number" id="numero2"></label><br>
    
    <!-- Botón que ejecuta la función calcular() al hacer clic -->
    <button onclick="calcular()">Calcular</button><br>
    
    <!-- Secciones donde se mostrarán los resultados -->
    <div>La suma es: <span id="suma"></span></div>
    <div>El producto es: <span id="producto"></span></div>
    <div>El número mayor es: <span id="mayor"></span></div>

    <script>
      function calcular() {
        // Obtener los valores ingresados y convertirlos a número
        const numero1 = Number(document.getElementById("numero1").value);
        const numero2 = Number(document.getElementById("numero2").value);
        
        // Validar que los campos no estén vacíos
        if (isNaN(numero1) || isNaN(numero2)) {
          alert("Por favor, ingrese ambos números.");
          return;
        }
        
        // Calcular suma y producto
        const suma = numero1 + numero2;
        const producto = numero1 * numero2;
        
        // Determinar el número mayor
        let mayor;
        if (numero1 > numero2) {
          mayor = numero1;
        } else if (numero2 > numero1) {
          mayor = numero2;
        } else {
          mayor = "Los números son iguales";
        }
        
        // Mostrar los resultados en la página
        document.getElementById("suma").textContent = suma;
        document.getElementById("producto").textContent = producto;
        document.getElementById("mayor").textContent = mayor;
      }
    </script>
  </body>
