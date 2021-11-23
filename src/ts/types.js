"use strict";
var User = /** @class */ (function () {
    function User(nombre, mail, comentario) {
        this.nombre = nombre;
        this.mail = mail;
        this.comentario = comentario;
        this.erroresValidacion = new Array();
        if (!this.nombre)
            this.erroresValidacion.push("Usted no ha ingresado un nombre.");
        if (!this.mail)
            this.erroresValidacion.push("Usted no ha ingresado un mail.");
        else if (mail.indexOf("@") < 0 || mail.indexOf(".") < 0)
            this.erroresValidacion.push("El mail ingresado no es correcto.");
        if (!this.comentario)
            this.erroresValidacion.push("Usted no ha ingresado un comentario.");
    }
    return User;
}());
;
function impactarFormulario(nombre, mail, comentario) {
    var usuarioAuxiliar = new User(nombre, mail, comentario);
    if (usuarioAuxiliar.erroresValidacion.length > 0) {
        usuarioAuxiliar.erroresValidacion.forEach(function (element) {
            mostrarMensaje(element, "error");
        });
        return 1;
    }
    else {
        impactarUsuario(usuarioAuxiliar);
        return 0;
    }
}
function impactarUsuario(usuario) {
    var user = {
        nombreContacto: usuario.nombre,
        mail: usuario.mail
    };
    var url = "https://PW2021-APINode-rafapelacchi.rp33.repl.co/enviar-formulario";
    fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        credentials: "same-origin",
        headers: {
            cache: 'no-store',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        if (response.status == 303)
            mostrarMensaje(response.text.toString(), "error");
        else
            mostrarMensaje(usuario.nombre + ", a la brevedad nos contactaremos con usted.", "success");
    })["catch"](function (error) {
        console.error(error);
    });
}
