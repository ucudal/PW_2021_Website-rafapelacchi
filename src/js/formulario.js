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

      if(usuarioAuxiliar.esValido())
      {
        usuarios.push(usuarioAuxiliar);
        limpiarFormulario();

        if(!mandoMail())
             mostrarMensaje( usuarioAuxiliar.getName() + ": Me contactare a la brevedad!", "success")
        else
             mostrarMensaje( usuarioAuxiliar.getName() + ": Ya se han enviado " + (getCantMails() + 1) + ", me contactare a la brevedad!", "success")
        
         agregarRegistroMail();
      }
      else
      {
        usuarioAuxiliar.erroresValidacion.forEach(function(element){
            mostrarMensaje(element, "error"); 
        });
      }

  }

function limpiarFormulario(){
    document.getElementById('nombre').value = ''; 
    document.getElementById('mail').value = ''; 
    document.getElementById('comentario').value = ''; 
}