var usuarios = [];

class Usuario{
    constructor(nombre, apellido, mail, celular) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.celular = celular;
        this.erroresValidacion = [];
        this.valido = false;
    };

    esValido(){
        if(!this.nombre)
            this.erroresValidacion.push("Usted no ha ingresado un nombre.");

        if(!this.apellido)
            this.erroresValidacion.push("Usted no ha ingresado un apellido.")
 
        if(!this.mail)
            this.erroresValidacion.push("Usted no ha ingresado un mail.")
        else if( this.mail.indexOf("@") < 0 || this.mail.indexOf(".") < 0)
            this.erroresValidacion.push("El mail ingresado no es correcto.")

        if(!this.celular)
            this.erroresValidacion.push("Usted no ha ingresado un celular.")
        else if(this.celular.length != 9)
            this.erroresValidacion.push("El celular ingresado no es correcto.")
        
        this.valido = !(this.erroresValidacion.length > 0) 

        return this.valido;
    }
  } 

  var boton = document.getElementById('registrarUsuario')
  boton.addEventListener('click', agregarUsuario)

  function agregarUsuario(){
      let nombre = document.getElementById('nombre').value; 
      let apellido = document.getElementById('apellido').value;
      let mail = document.getElementById('mail').value;
      let celular = document.getElementById('celular').value;

      let usuarioAuxiliar = new Usuario(nombre,apellido,mail,celular);

      document.getElementById('erroresFormulario').textContent = '';

      if(usuarioAuxiliar.esValido())
      {
        usuarios.push(usuarioAuxiliar);
        limpiarFormulario();
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
    document.getElementById('apellido').value = ''; 
    document.getElementById('mail').value = ''; 
    document.getElementById('celular').value = ''; 
}