 alert("Gracias por visitar Durlocraks!!");

 function validarFormulario(evento) {
    evento.preventDefault();
    var datos = document.getElementById("nombre", "apellido", "telefono", "email",).value;
    if(datos.length == 0) {
    alert('No has escrito nada');
    return;
    }
    
    alert("Le enviaremos un mail con la informacion requerida");
    document.formulario.submit();
}

