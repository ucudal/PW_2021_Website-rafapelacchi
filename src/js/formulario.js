document.getElementById('registrarUsuario').addEventListener("click", function (event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value; 
    let mail = document.getElementById('mail').value;
    let comentario = document.getElementById('comentario').value;

    var result = impactarFormulario(nombre, mail, comentario);
    if(result == 0)
    {
        document.getElementById('nombre').value = ''; 
        document.getElementById('mail').value = ''; 
        document.getElementById('comentario').value = ''; 
    }
})