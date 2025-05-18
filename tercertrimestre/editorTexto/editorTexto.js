tinymce.init({
    selector: '#editorTexto',  
    language: 'es',            
    height: 350,             
    menubar: false            
});

// Función que genera un PDF a partir del contenido HTML 
function generarPDF() {
    const elemento = document.getElementById("salida");     
    html2pdf().from(elemento).save("documento.pdf");            //  librería html2pdf para generar y descargar el PDF
}
function pasarADiv() {
    const contenido = tinymce.get("editorTexto").getContent();  
    document.getElementById("salida").innerHTML = contenido;    
}
