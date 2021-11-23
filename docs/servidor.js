


fetch('https://PW2021-APINode-rafapelacchi.rp33.repl.co/experiencia-laboral').then((res) => {
  return res.json(); 
}).then((json) =>  {
  for(var i = 0; i < json.length; i++){ 
    agregarExperiencia(json[i], i) 
  }
})


var user = {
  nombre: "test",
  mail: "test@sdf.com"
};
var url = "https://PW2021-APINode-rafapelacchi.rp33.repl.co/enviar-formulario";
fetch(url, {
  method: "POST",
  body: JSON.stringify(user),
  credentials: "same-origin",
  headers: { 
      cache: 'no-store',
      'Content-Type': 'application/json',
      withCredentials:true
  }
}).then(function (response) {  
  console.log(response)
  console.log(response.headers)
  console.log(response.headers["set-cookie"])
  if(response.status == 303)
       mostrarMensaje(response.text.toString(), "error");
  else
       mostrarMensaje(user.nombre + ", a la brevedad nos contactaremos con usted.", "success")
})["catch"](function (error) {
  console.error(error);
}); 