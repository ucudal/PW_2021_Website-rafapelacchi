
fetch('http://localhost:3002/obtener').then((res) => { 
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




var user = {
    nombre:'TESTING',
    mail:'rasdfas@sdfsd.com'
};
 
fetch("https://PW2021-APINode-rafapelacchi.rp33.repl.co/enviar-formulario", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {'Content-Type': 'application/json'}
}).then(function (response) {
    console.log(response);
})