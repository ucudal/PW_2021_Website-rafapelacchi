var usuarios = [];

class Usuario{
    constructor(nombre, mail, comentario) {
        this.nombre = nombre;
        this.mail = mail;
        this.comentario = comentario;
        this.erroresValidacion = [];
        this.valido = false;
    };

    getName(){
        return this.nombre;
    }

    esValido(){
        if(!this.nombre)
            this.erroresValidacion.push("Usted no ha ingresado un nombre.");
 
        if(!this.mail)
            this.erroresValidacion.push("Usted no ha ingresado un mail.")
        else if( this.mail.indexOf("@") < 0 || this.mail.indexOf(".") < 0)
            this.erroresValidacion.push("El mail ingresado no es correcto.")

        if(!this.comentario)
            this.erroresValidacion.push("Usted no ha ingresado un comentario.")
    
        this.valido = !(this.erroresValidacion.length > 0) 

        return this.valido;
    }
  } 

  var boton = document.getElementById('registrarUsuario')
  boton.addEventListener('click', agregarUsuario)

  function agregarUsuario(){
      let nombre = document.getElementById('nombre').value; 
      let mail = document.getElementById('mail').value;
      let comentario = document.getElementById('comentario').value;

      let usuarioAuxiliar = new Usuario(nombre,mail,comentario);

      document.getElementById('erroresFormulario').textContent = '';

      if(usuarioAuxiliar.esValido())
      {
        usuarios.push(usuarioAuxiliar);
        limpiarFormulario();
        mostrarMensaje( usuarioAuxiliar.getName() + ": A la brevedad con usted!","success")
      }
      else
        mostrarErroresFormulario(usuarioAuxiliar);

  }

function mostrarErroresFormulario(user){
    let contenedorErrores = document.getElementById('erroresFormulario');
 
    user.erroresValidacion.forEach(function(element){
        let liAuxiliar = document.createElement('li');
        liAuxiliar.textContent = element;
        contenedorErrores.append(liAuxiliar);
    });
}

function limpiarFormulario(){
    document.getElementById('nombre').value = ''; 
    document.getElementById('mail').value = ''; 
    document.getElementById('comentario').value = ''; 
}