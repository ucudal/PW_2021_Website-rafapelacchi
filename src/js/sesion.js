function obtener(){
    fetch('https://PW2021-APINode-rafapelacchi.rp33.repl.co/obtener').
then((res) => { 
  return res.json(); 
}).then((json) =>  {
    var accedeAnteriormente = json.nombre;

    var mensaje = "";

    if(accedeAnteriormente)
        mensaje = accedeAnteriormente + ", es un gusto tenerlo nuevamente.";
    else
        mensaje = "Bienvenido a mi pagina web!";
    
    mostrarMensaje(mensaje, "success");
})
}
fetch('https://PW2021-APINode-rafapelacchi.rp33.repl.co/obtener').
then((res) => { 
  return res.json(); 
}).then((json) =>  {
    var accedeAnteriormente = json.nombre;

    var mensaje = "";

    if(accedeAnteriormente)
        mensaje = accedeAnteriormente + ", es un gusto tenerlo nuevamente.";
    else
        mensaje = "Bienvenido a mi pagina web!";
    
    mostrarMensaje(mensaje, "success");
})

function generarCookie(usuario){
    var user = {
        nombre: usuario.nombre,
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
        console.log('VA')
        console.log(response.headers['set-cookie'])
        console.log('VA')
        if(response.status == 303)
             mostrarMensaje(response.text, "error");
        else
             mostrarMensaje(usuario.nombre + ", a la brevedad nos contactaremos con usted.")

        return response
    })["catch"](function (error) {
        console.log('2')
        console.error(error);
    }); 

}