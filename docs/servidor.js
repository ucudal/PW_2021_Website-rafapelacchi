


fetch('https://PW2021-APINode-rafapelacchi.rp33.repl.co/experiencia-laboral').then((res) => {
  return res.json(); 
}).then((json) =>  {
  for(var i = 0; i < json.length; i++){ 
    agregarExperiencia(json[i], i) 
  }
})