var flechaSiguiente = document.getElementById('flechaSiguiente');
var flechaAntes = document.getElementById('flechaAntes');
var experienciaActual= 1;

flechaSiguiente.addEventListener("click", aumentarExperiencia);
flechaAntes.addEventListener("click", disminuirExperiencia);


function aumentarExperiencia(){ 
    experienciaActual++;
    cambiarExperiencia();
}
function disminuirExperiencia(){
    experienciaActual--;
    cambiarExperiencia()
}

function cambiarExperiencia(){
    var elementos = document.getElementsByClassName('experiencia');

    for (var i = 0; i < elementos.length; i++) {
        var aux = elementos[i];

        if(aux.dataset.indice == experienciaActual)
        { 
            aux.style.display = "block";
        }
        else
            aux.style.display = "none";
     }
 
    flechaAntes.style.display = experienciaActual == 1 ? "none" : "block";
    flechaSiguiente.style.display = experienciaActual == elementos.length ? "none" : "block";
}

function aprobarCurso(){
    
    mostrarMensaje( "Gracias!", "success");
    mostrarMensaje( "Gracias!", "success");
    mostrarMensaje( "Gracias!", "success");
    mostrarMensaje( "Gracias!", "success");
    mostrarMensaje( "Gracias!", "success");

    var tercerRegla = document.getElementById('tercerRegla');
    tercerRegla.style.display = "block";
}

var aprobarMateria = document.getElementById('aprobarMateria');
aprobarMateria.addEventListener("click", aprobarCurso)

function agregarExperiencia(aux){

var contenedorExperiencia = document.getElementById("contenedorExperiencia");

  var divExperiencia = document.createElement("div");
  divExperiencia.className="bg-white p-16 experiencia";
  if(i!=0)
    divExperiencia.style.display = "none";

  var header = document.createElement("div");
  header.className="text-center";

  var labelExperiencia = document.createElement("label");
  labelExperiencia.className="font-extrabold text-3xl";
  labelExperiencia.textContent = aux.empresa;

  var divFecha = document.createElement("div");
  divFecha.className="text-center pb-7 text-gray-400";
  divFecha.textContent =  "( " + aux.fechaInicio.getDay() + "/"+ aux.fechaInicio.getMonth()+ "/"+ aux.fechaInicio.getFullYear() + " - "+ aux.fechaFin.getDay() + "/"+ aux.fechaFin.getMonth()+ "/"+ aux.fechaFin.getFullYear() + " )";

  var body = document.createElement("div");
  body.textContent = aux.descripcion;

  header.appendChild(labelExperiencia);
  divExperiencia.appendChild(header);
  divExperiencia.appendChild(divFecha);
  divExperiencia.appendChild(body);

  divExperiencia.dataset.indice = i+1;

  contenedorExperiencia.appendChild(divExperiencia)
}