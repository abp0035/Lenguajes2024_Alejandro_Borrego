document.getElementById("procesarBtn").addEventListener("click", () => {

    // Obtiene el texto ingresado por el usuario 
    const texto = document.getElementById("entradaTexto").value;


    const capitalizado = texto
        .toLowerCase()                                
        .split(" ")                                  
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)) 
        .join(" ");                                   

    document.getElementById("original").textContent = texto;             
    document.getElementById("longitud").textContent = texto.length;     
    document.getElementById("palabras").textContent = palabras.length;   
    document.getElementById("mayusculas").textContent = texto.toUpperCase(); 
    document.getElementById("minusculas").textContent = texto.toLowerCase(); 
    document.getElementById("capitalizado").textContent = capitalizado; 
    document.getElementById("primero").textContent = texto.charAt(0);    
    document.getElementById("ultimo").textContent = texto.charAt(texto.length - 1); 
    document.getElementById("concat").textContent = texto + " JS";       
    document.getElementById("contieneA").textContent = texto.includes("a") ? "Sí" : "No";
    document.getElementById("reemplazo").textContent = texto.replaceAll("a", "@");      
    document.getElementById("subcadena").textContent = texto.slice(0, 6); 
});