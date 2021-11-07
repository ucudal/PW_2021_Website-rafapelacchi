var experienciaUrudata = document.getElementById('urudata');
var experienciaDatasec = document.getElementById('datasec');
var flechaSiguiente = document.getElementById('flechaSiguiente');
var flechaAntes = document.getElementById('flechaAntes');
var experienciaActual= "urudata";

flechaSiguiente.addEventListener("click", cambiarExperiencia)
flechaAntes.addEventListener("click", cambiarExperiencia) 

var aprobarMateria = document.getElementById('aprobarMateria');
aprobarMateria.addEventListener("click", aprobarCurso)

function cambiarExperiencia(){
    switch(experienciaActual) 
    {
        case "datasec": {
            flechaSiguiente.style.display = 'block';
            flechaAntes.style.display = 'none';
            experienciaUrudata.style.display = 'block';
            experienciaDatasec.style.display = 'none';
            experienciaActual= "urudata";
            break;
        }
        case "urudata": {
            flechaSiguiente.style.display = 'none';
            flechaAntes.style.display = 'block';
            experienciaUrudata.style.display = 'none';
            experienciaDatasec.style.display = 'block';
            experienciaActual= "datasec";
            break;
        } 
    }
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