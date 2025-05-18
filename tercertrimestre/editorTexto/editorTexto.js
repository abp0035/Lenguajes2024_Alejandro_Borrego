tinymce.init({
    selector: '#editorTexto',  
    language: 'es',            
    height: 300,             
    menubar: false            
});

function pasarADiv() {
    const contenido = tinymce.get("editorTexto").getContent();  
    document.getElementById("salida").innerHTML = contenido;    
}

// Función que genera un PDF a partir del contenido HTML 
function generarPDF() {
    const elemento = document.getElementById("salida");     
    html2pdf().from(elemento).save("documento.pdf");            //  librería html2pdf para generar y descargar el PDF
}